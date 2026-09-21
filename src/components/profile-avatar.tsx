import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfileAvatar() {
  return (
    <Avatar className="size-12 shrink-0">
      <AvatarImage src="/karol-modelski-avatar.webp" alt="Karol Modelski" />
      <AvatarFallback className="text-foreground">KM</AvatarFallback>
    </Avatar>
  )
}
