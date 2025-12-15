import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";

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
    <section id="contact" className="py-32 border-t border-border/40">
      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-12 gap-16">
          
          <div className="md:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-primary font-medium mb-2">Contato</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight gradient-text mb-6">
                Vamos trabalhar<br/>juntos.
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Aberto para novos projetos e colaborações.
              </p>
            </motion.div>

            <div className="space-y-8">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Email</p>
                <a href="mailto:lucasheg@yahoo.com" className="text-2xl hover:text-primary transition-colors">lucasheg@yahoo.com</a>
              </div>

              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-primary mb-4">Redes Sociais</p>
                <div className="flex flex-col gap-3">
                  <a 
                    href="https://linkedin.com/in/lucashegouet" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <Linkedin className="h-5 w-5" /> LinkedIn 
                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a 
                    href="https://behance.net/lucashh3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <span className="font-bold text-lg leading-none w-5 text-center">Be</span> Behance
                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a 
                    href="https://github.com/lucashh3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <Github className="h-5 w-5" /> GitHub
                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
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
              className="bg-card/50 border border-border/40 rounded-xl p-8 md:p-10"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-muted-foreground">Nome</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Seu nome" 
                            {...field} 
                            className="bg-secondary/50 border-border/50 focus:border-primary rounded-lg py-6" 
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
                        <FormLabel className="text-sm font-medium text-muted-foreground">E-mail</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="seu@email.com" 
                            {...field} 
                            className="bg-secondary/50 border-border/50 focus:border-primary rounded-lg py-6" 
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
                        <FormLabel className="text-sm font-medium text-muted-foreground">Mensagem</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Fale sobre seu projeto..." 
                            className="bg-secondary/50 border-border/50 focus:border-primary rounded-lg min-h-[150px] resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-medium rounded-lg py-6 shadow-lg shadow-primary/25">
                    Enviar Mensagem
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
