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
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight">Contato</h2>
            <div className="h-1 w-20 bg-black/10 rounded-full"></div>
            <p className="text-muted-foreground text-lg">
              Estou sempre aberto a novos projetos e colaborações.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Informações</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4" /> lucasheg@yahoo.com
                  </p>
                  <p>📍 Salvador - BA</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium">Redes Sociais</h3>
                <div className="flex flex-col gap-3">
                  <a 
                    href="https://linkedin.com/in/lucashegouet" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <Linkedin className="h-5 w-5" /> LinkedIn 
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a 
                    href="https://behance.net/lucashh3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <span className="font-bold text-lg leading-none w-5 text-center">Be</span> Behance
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a 
                    href="https://github.com/lucashh3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <Github className="h-5 w-5" /> GitHub
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} className="bg-secondary/20" />
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
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input placeholder="seu@email.com" {...field} className="bg-secondary/20" />
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
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Como posso ajudar?" className="resize-none min-h-[120px] bg-secondary/20" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">Enviar Mensagem</Button>
                </form>
              </Form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
