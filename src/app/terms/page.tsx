import { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use — Morpheo",
};

export default function Terms() {
  return (
    <LegalPage title="Terms of Use for Morpheo">
      <p><strong>Last updated: March 18, 2026</strong></p>
      <p>Please read these Terms of Use (&quot;Terms&quot;) carefully before using the Morpheo app (&quot;App&quot;).</p>

      <hr />

      <h2>1. Acceptance of Terms</h2>
      <p>By downloading, installing, or using Morpheo, you agree to be bound by these Terms. If you do not agree, do not use the App.</p>

      <hr />

      <h2>2. Description of Service</h2>
      <p>Morpheo is a dream journaling app that allows you to record dreams via voice or text, and uses AI to provide symbolic analysis, emotional tone detection, and pattern tracking. The App includes a free tier with limited features and a Premium subscription with additional capabilities.</p>

      <hr />

      <h2>3. Subscriptions and Purchases</h2>
      <p>Morpheo offers the following in-app purchase options:</p>
      <ul>
        <li><strong>Monthly Subscription</strong>: Auto-renews each month until cancelled.</li>
        <li><strong>Yearly Subscription</strong>: Auto-renews each year until cancelled.</li>
        <li><strong>Lifetime Purchase</strong>: One-time payment for permanent access.</li>
      </ul>

      <h3>Auto-Renewal</h3>
      <ul>
        <li>Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current billing period.</li>
        <li>Your Apple ID account will be charged for renewal within 24 hours prior to the end of the current period.</li>
        <li>You can manage and cancel your subscriptions in your device&apos;s Settings &gt; Apple ID &gt; Subscriptions.</li>
      </ul>

      <h3>Free Trial</h3>
      <ul>
        <li>If a free trial is offered, unused portions are forfeited upon purchasing a subscription.</li>
      </ul>

      <h3>Pricing</h3>
      <ul>
        <li>Prices are displayed in your local currency within the App. Prices may vary by region and are subject to change.</li>
      </ul>

      <hr />

      <h2>4. User Content</h2>
      <ul>
        <li>You retain ownership of all dream entries and content you create within the App.</li>
        <li>Dream content is stored locally on your device and is not uploaded to our servers.</li>
        <li>When you use AI analysis features, your dream text is sent to Google Gemini API for processing. This content is not stored by us after processing.</li>
      </ul>

      <hr />

      <h2>5. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the App for any unlawful purpose.</li>
        <li>Attempt to reverse engineer, decompile, or disassemble the App.</li>
        <li>Use the App in any way that could damage or overburden our services or third-party services.</li>
      </ul>

      <hr />

      <h2>6. Intellectual Property</h2>
      <p>The App, including its design, code, graphics, and branding, is owned by the developer and protected by intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the App for personal purposes.</p>

      <hr />

      <h2>7. Disclaimer of Warranties</h2>
      <p>The App is provided &quot;as is&quot; without warranties of any kind. Dream analysis provided by AI is for entertainment and self-reflection purposes only and should not be considered professional psychological, medical, or therapeutic advice.</p>

      <hr />

      <h2>8. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law, the developer shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the App.</p>

      <hr />

      <h2>9. Termination</h2>
      <p>We reserve the right to terminate or suspend access to the App at any time, without notice, for conduct that violates these Terms.</p>

      <hr />

      <h2>10. Changes to Terms</h2>
      <p>We may update these Terms from time to time. Continued use of the App after changes constitutes acceptance of the updated Terms.</p>

      <hr />

      <h2>11. Governing Law</h2>
      <p>These Terms are governed by the laws of the Republic of Turkey.</p>

      <hr />

      <h2>12. Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us at:</p>
      <p>
        <strong>Email</strong>: <a href="mailto:support@somniaapp.com">support@somniaapp.com</a><br />
        <strong>GitHub</strong>: <a href="https://github.com/buraka/morpheo-app">github.com/buraka/morpheo-app</a>
      </p>
    </LegalPage>
  );
}
