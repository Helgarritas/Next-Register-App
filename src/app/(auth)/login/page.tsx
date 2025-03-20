"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
// Componentes UI
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// Custom Hook 
import { useForm } from "@/hooks/useForm";
// (Opcional) Store
import { useAuthStore } from "@/store/useAuthStore";

import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";

// Configuración de los campos del formulario
const items = [
  { label: "email", placeholder: "Enter your email" },
  { label: "password", placeholder: "Enter your password", type: "password" },
];

export default function LoginPage() {
  const { formState, onInputChange } = useForm<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const router = useRouter();

  const { isAuthenticated, user } = useKindeAuth();


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formState.email || !formState.password) {
      setErrorMsg("Por favor, completa todos los campos.");
      return;
    }

    const result = await signIn("credentials", {
      email: formState.email,
      password: formState.password,
      redirect: false,
    });

    if (result?.error) {
      setErrorMsg("Credenciales inválidas. Intenta de nuevo.");
    } else {
      login({ id: "usuario-id", email: formState.email, role: "user" });
  }
  };

  return (
    <div className="h-[100dvh] flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-[350px] p-6 border rounded-[10px] bg-card">
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <Label className="capitalize">{item.label}</Label>
              <Input
                type={item.type || "text"}
                name={item.label}
                placeholder={item.placeholder}
                autoComplete={item.label}
                onChange={onInputChange}
                className="h-9 border-[1px]"
              />
            </div>
          ))}
          {errorMsg && <span className="mt-2 text-sm text-foreground-red">{errorMsg}</span>}
        </div>
{/* 
        <Button type="submit" size="sm" className="mt-6 w-full text-foreground bg-foreground-blue">
          Login
        </Button> */}
        <LoginLink
          postLoginRedirectURL="/dashboard"
        >
          <div className="bg-blue-500 px-3 py-">
            Login
          </div>
        </LoginLink>
      </form>
    </div>
  );
}
