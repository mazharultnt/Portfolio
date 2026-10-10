import type { Metadata } from "next";
import { site } from "@/data/site";
import ContactForm from "@/components/ContactForm";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";
import { PageHero } from "@/components/Cards";
import { Clock, Github, Linkedin, Mail, MapPin } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Mazharul Islam about junior front-end roles, remote work or web projects. Send a message and it goes straight to his inbox.",
};

export default function ContactPage() {
  const links = [
    { icon: <Mail />, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: <Linkedin />, label: "LinkedIn", value: "linkedin.com/in/mazharultnt", href: site.linkedin },
    { icon: <Github />, label: "GitHub", value: "github.com/mazharultnt", href: site.github },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let&apos;s <span className="gradient-text">work together</span></>}
        text="Hiring for a junior front-end role, or have a small project in mind? Send me a message. I usually reply within a day."
      />

      <section className="section">
        <div className="container contact-grid">
          <Reveal from="left" className="contact-side">
            <ImageSlot file="contact-illustration.jpg" className="contact-img" label="contact-illustration.jpg" />

            <ul className="contact-links">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target={l.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer">
                    <span className="contact-icon">{l.icon}</span>
                    <span>
                      <small>{l.label}</small>
                      <strong>{l.value}</strong>
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <div className="static-row">
                  <span className="contact-icon"><MapPin /></span>
                  <span>
                    <small>Location</small>
                    <strong>{site.location}</strong>
                  </span>
                </div>
              </li>
              <li>
                <div className="static-row">
                  <span className="contact-icon"><Clock /></span>
                  <span>
                    <small>Time zone</small>
                    <strong>{site.timezone}</strong>
                  </span>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal from="right" className="contact-card">
            <h2>Send a message</h2>
            <p>Fill in the form and I will get it by email.</p>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
