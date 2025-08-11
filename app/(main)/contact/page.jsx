export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-background text-foreground">
      <h1 className="text-5xl font-bold mb-8">Contact Us</h1>
      <p className="text-xl mb-6 text-center max-w-2xl">
        Have questions or feedback? Feel free to reach out to us via email.
      </p>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=samirthakur2005@gmail.com"
        className="bg-primary text-primary-foreground px-6 py-3 rounded-md text-lg font-semibold hover:bg-primary/90 transition-colors"
      >
        Send us an Email
      </a>
      <p className="mt-4 text-muted-foreground text-sm">
        (Thanku for reaching us)
      </p>
    </div>
  );
}