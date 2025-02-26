import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Book } from "lucide-react"

const contents = [
  {
    label: "user",
    placeholder: "",
  },
  {
    label: "password",
    placeholder: "",
  },
]

export default function page() {
  return (
    <>
      <div className="h-[100dvh] flex items-center justify-center">
        <form
          action=""
          className="w-[350px] p-6 space-y-6 border rounded-[10px] bg-card"
        >
          <Book className="w-7 h-7 mx-auto"/>
          <div           
            className="space-y-4"
          >
            {contents.map((content, i) => (
              <div 
                key={i}
                className="flex flex-col gap-1.5"
              >
                <Label className="capitalize">
                  {content.label}
                </Label>
                <Input
                  className="h-9"
                />
              </div>
            ))}
          </div>
          <Button
            size={"sm"}
            className="w-full text-foreground bg-foreground-blue"
          >
            Login
          </Button>
        </form>
      </div>  
    </>
  )
}
