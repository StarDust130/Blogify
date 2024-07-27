import { useToast } from "@/components/ui/use-toast";

export const handleError = (message: string) => {
     const { toast } = useToast();
  toast({
    title: "Signup Failed 😢",
    description: message,
    variant: "destructive",
  });
};