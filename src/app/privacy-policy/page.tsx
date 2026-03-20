import { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Somnia",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy for Somnia">
      <p><strong>Last updated: March 18, 2026</strong></p>
      <p>
        Somnia (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we handle information in connection with the Somnia app (&quot;App&quot;).
      </p>

      <hr />

      <h2>1. Information We Collect</h2>
      <p>Somnia is designed with privacy in mind. Here is what we collect and how:</p>

      <h3>Data You Provide</h3>
      <ul>
        <li><strong>Dream entries</strong>: Text and voice recordings you create within the App. These are stored locally on your device using SwiftData.</li>
        <li><strong>App preferences</strong>: Settings such as notification preferences and display options, stored locally on your device.</li>
      </ul>

      <h3>Data Processed by Third Parties</h3>
      <ul>
        <li><strong>Voice transcription and AI analysis</strong>: When you use voice recording or AI analysis features, your dream content is sent to Google Gemini API for processing. This data is used solely to provide the transcription and analysis service. Please refer to <a href="https://policies.google.com/privacy">Google&apos;s Privacy Policy</a> for details on how Google handles this data.</li>
      </ul>

      <h3>Advertising and Analytics</h3>
      <ul>
        <li><strong>Google AdMob</strong>: We display rewarded video ads to free-tier users. AdMob may collect device identifiers and usage data for ad personalization. Please refer to <a href="https://policies.google.com/technologies/ads">Google&apos;s Advertising Policy</a> for details.</li>
        <li><strong>Firebase Analytics</strong>: We use Firebase Analytics to collect anonymous usage statistics (e.g., feature usage frequency, crash reports). This data does not include your dream content or personally identifiable information. Please refer to <a href="https://firebase.google.com/support/privacy">Firebase Privacy</a> for details.</li>
      </ul>

      <h3>Data We Do NOT Collect</h3>
      <ul>
        <li>We do not collect your name, email address, or any personally identifiable information.</li>
        <li>We do not share your dream content with anyone other than the AI service provider described above.</li>
        <li>We do not sell your data.</li>
      </ul>

      <hr />

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To provide core App functionality (recording, analyzing, and displaying your dreams).</li>
        <li>To send local notifications you have opted into (e.g., daily dream reminders).</li>
      </ul>

      <hr />

      <h2>3. Data Storage and Security</h2>
      <p>All dream data is stored locally on your device. We do not operate servers that store your personal data. Data sent to third-party AI services (Google Gemini) is processed in transit and is not retained by us.</p>

      <hr />

      <h2>4. Apple Watch</h2>
      <p>If you use the Apple Watch companion app, dream data recorded on your Watch is transferred to your iPhone via WatchConnectivity and stored locally on your device.</p>

      <hr />

      <h2>5. Children&apos;s Privacy</h2>
      <p>Somnia is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13.</p>

      <hr />

      <h2>6. Changes to This Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time. We will notify you of any changes by updating the &quot;Last updated&quot; date at the top of this page. Continued use of the App after changes constitutes your acceptance of the updated policy.</p>

      <hr />

      <h2>7. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at:</p>
      <p>
        <strong>Email</strong>: <a href="mailto:support@somniaapp.com">support@somniaapp.com</a><br />
        <strong>GitHub</strong>: <a href="https://github.com/buraka/somnia-app">github.com/buraka/somnia-app</a>
      </p>
    </LegalPage>
  );
}
