# FAQ Page Content

## Context
The current FAQ page is a single sentence of contact info. The user wants a full FAQ covering licensing, the student-font nature of the typefaces, how Gumroad purchasing works, and a physical token redemption system for festival sales.

## Confirmed content decisions
- **No headcount tiers** — one flat price; "get in touch" for large organisations
- **Desktop license only** — no web license, remove all web license references
- **Student fonts disclaimer** — these are designed by Beckmans students, some are still in development / demo quality, shared in the spirit of experimentation
- **Gumroad purchase flow** — explain how to buy, that the font file arrives by email after purchase, file formats (OTF/TTF)
- **Physical token system** — fonts sold as physical tokens at festivals/events; each token has a redemption code; enter code as Gumroad discount code → get the font for free (you already paid at the event)
- **No web licenses**
- **Solidarity/non-profit discounts** — keep, fits the student/Beckmans ethos
- **Trial license** — important since not all fonts are finished
- **Can modify outlines, not font files** — keep
- **NFTs, political/religious, violence** — keep the exclusions

## Confirmed: remaining details
- **Updates:** free — Gumroad resends the updated file automatically
- **Refunds:** no refunds, all sales final (digital goods)
- **Contact email:** otflicense@gmail.com

---

## Full FAQ text (final copy)

---

**About the fonts**

These typefaces were designed by students at Beckmans College of Design, class VK27. They are real, original fonts — but some are still in development. Think of them as trials, demos, and experiments made with care and shared with joy. If you spot something missing or broken, we love hearing about it.

---

**How does licensing work?**

The license should be held by the person or organisation using the font. If you are a designer purchasing on behalf of a client, the license should be in the client's name. The licensee is responsible for staying within the terms of the agreement.

If you are using a font for a personal project, you purchase the license yourself.

For large organisations (250+ employees), please get in touch at otflicense@gmail.com and we will put together something that fits.

---

**What does the desktop license cover?**

The desktop license covers the use of the font for creating graphics, printed materials, videos and animations, wordmarks, logos, and social media content.

---

**What does it not cover?**

The standard license does not cover:

- use in broadcasting (TV, cinema, video-on-demand, or subscription streaming services)
- use on streaming or social media platforms with over 100,000 followers or subscribers
- use in applications or games
- use of the font as a logo or wordmark for an organisation with more than 50 employees
- embedding the font in hardware or software
- any use related to NFTs or cryptocurrencies
- use in a political or religious context without our written consent

For any of the above, please get in touch at otflicense@gmail.com. The fonts can never be used to promote violence or discrimination.

---

**What is the trial license?**

Under the trial license, the fonts may be used for previewing and evaluating only. Trial licenses cover non-commercial and non-public use. Students may use trial fonts in school projects and personal work, as long as that work is not made public.

---

**Can I modify the fonts?**

You may convert letterforms to outlines in design software. Modifying the font file itself is not permitted. If you would like a specific modification, get in touch — we are happy to help.

---

**Do you offer discounts?**

Yes. We stand in solidarity with feminist, decolonial, anti-racist and emancipatory causes. If you are working on a project that fits these categories, or you represent a non-profit initiative, reach out at otflicense@gmail.com and we will do our best to support you.

---

**How do I buy a font?**

Head to our Gumroad shop at otflicense.gumroad.com. Choose a font, complete the purchase, and you will receive the font file by email from Gumroad. Files are available in OTF and TTF format.

---

**Will I receive updates?**

Yes. If a designer updates their font, Gumroad will send you the new file automatically. You only pay once.

---

**What is the refund policy?**

All sales are final. We do not offer refunds on digital goods.

---

**I bought a font token at an event — how do I redeem it?**

We sell physical font tokens at festivals and events. Each token comes with a unique redemption code. To download your font, go to the product page on our Gumroad shop, enter your code in the discount code field at checkout, and the price drops to zero. The font file will be sent to your email.

---

**Contact**

For licensing questions, large organisation inquiries, solidarity discounts, or anything else: otflicense@gmail.com

---

## Implementation

### What changes
- Replace the current single-paragraph `SimplePage` FAQ with a structured Q&A component
- New component: `FaqPage` — renders a scrollable list of question/answer blocks
- Each Q/A block: bold question in Arial, answer text below, separated by a thin rule or generous spacing
- Keep the `NavBar` at the top, same as all other pages

### File to modify
- `src/App.tsx`
  - Add `FaqPage` component (self-contained, ~80 lines)
  - Route `page.id === "contact"` to `<FaqPage>` instead of `<SimplePage title="FAQ">`
  - Keep `PAGE_TEXT.FAQ` entry for any fallback (or remove it)

### Layout
- Max width ~52rem, left-aligned, generous line height
- Questions in bold Arial, same size as body or slightly larger
- Answers in regular Arial
- Consistent top margin between each block
- Same white background and sticky NavBar as all other pages

