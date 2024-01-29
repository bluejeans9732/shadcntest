import Nav from "@/components/Nav"
import { ProfileForm } from "@/components/UserForm"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="p-24">
      <Nav />
      <section className="py-12 flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl font-bold">shadcn is awesome</h1>
        <p className="text-2xl text-muted-foreground">
          Hand-picked thems that you can copy and paste into your apps
        </p>
      </section>
      <div className="flex gap-6 py-6 items-center justify-center">
        <Button variant={"secondary"}>Learn More</Button>
        <Button>Enroll Now</Button>
      </div>
      <ProfileForm />
    </main>
  )
}
