import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";

/**
 * Props del componente SelectComp
 * @param handleSelect - Función que recibe el valor seleccionado como un número.
 * @param selects - Array de números disponibles para seleccionar.
 * @param defaultValue - Valor por defecto del select (opcional).
 * @param placeholder - Placeholder del select cuando no hay valor seleccionado (opcional).
 * @param className - Clases adicionales para el estilo del SelectTrigger (opcional).
 */

interface SelectCompProps {
  handleSelect: (value: any) => void;
  selects: number[] | string[];
  defaultValue?: string;
  placeholder?: string;
  className?: string;
}

export function SelectComp({
  handleSelect,
  selects,
  defaultValue = "Select",
  placeholder = "Select",
  className
}: SelectCompProps) {
  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={(value: string) => handleSelect(value)}
    >
      <SelectTrigger className={`w-max ${className ?? ""} text-foreground bg-transparent`}>
        <SelectValue placeholder={placeholder} />
        <ChevronDown className="w-4 h-4" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          {selects.map((value) => (
            <SelectItem key={value} value={String(value)}>
              {value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
