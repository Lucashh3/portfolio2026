import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Retornarei em breve.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-32 border-t border-border/40 bg-secondary/5">
      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          
          <div className="md:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">Let's work<br/>together.</h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Open for new projects and collaborations.
              </p>
            </motion.div>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">Email</h3>
                <a href="mailto:lucasheg@yahoo.com" className="text-2xl hover:text-white transition-colors">lucasheg@yahoo.com</a>
              </div>

              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">Connect</h3>
                <div className="flex flex-col gap-4 items-start">
                   <a 
                    href="https://linkedin.com/in/lucashegouet" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg text-muted-foreground hover:text-white transition-colors group"
                  >
                    <Linkedin className="h-5 w-5" /> LinkedIn 
                    <ArrowUpRight className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a 
                    href="https://behance.net/lucashh3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg text-muted-foreground hover:text-white transition-colors group"
                  >
                    <span className="font-bold text-lg leading-none w-5 text-center">Be</span> Behance
                    <ArrowUpRight className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a 
                    href="https://github.com/lucashh3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg text-muted-foreground hover:text-white transition-colors group"
                  >
                    <Github className="h-5 w-5" /> GitHub
                    <ArrowUpRight className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary/10 border border-border/40 p-8 md:p-10"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-mono uppercase tracking-wider text-muted-foreground">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            {...field} 
                            className="bg-transparent border-0 border-b border-border rounded-none px-0 py-6 focus-visible:ring-0 focus-visible:border-white text-lg placeholder:text-muted-foreground/30 transition-colors" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-mono uppercase tracking-wider text-muted-foreground">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="john@example.com" 
                            {...field} 
                            className="bg-transparent border-0 border-b border-border rounded-none px-0 py-6 focus-visible:ring-0 focus-visible:border-white text-lg placeholder:text-muted-foreground/30 transition-colors" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-mono uppercase tracking-wider text-muted-foreground">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project..." 
                            className="bg-transparent border-0 border-b border-border rounded-none px-0 py-6 focus-visible:ring-0 focus-visible:border-white text-lg placeholder:text-muted-foreground/30 min-h-[150px] resize-none transition-colors" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full md:w-auto rounded-none bg-white text-black hover:bg-white/90 font-mono uppercase tracking-widest px-8 py-6 text-sm">
                      Send Message
                    </Button>
                  </div>
                </form>
              </Form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
