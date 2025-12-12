'use client'
import Button from './Button'

export default function ReachOut() {
  return (
    <section id="reach-out" className="mx-auto my-24 max-w-5xl px-4 text-center">
      <h2 className="text-3xl font-extrabold text-white">Get in Touch</h2>
      <p className="mt-3 text-zinc-400">
        I’m open to projects, collaborations, or just a friendly chat.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Button as="external" href="mailto:YOUR_EMAIL">
          Email Me
        </Button>
        <Button as="link" href="/contact">
          Contact Page
        </Button>
      </div>
    </section>
  )
}
