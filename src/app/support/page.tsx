import { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Support — Morpheo",
};

export default function Support() {
  return (
    <LegalPage title="Morpheo — Support">
      <p>Welcome to Morpheo support. We&apos;re here to help!</p>

      <hr />

      <h2>Frequently Asked Questions</h2>

      <h3>How do I record a dream?</h3>
      <p>Tap the <strong>+</strong> button on the home screen. You can either type your dream or tap the microphone icon to record your voice. Morpheo will automatically transcribe and analyze your dream.</p>

      <h3>Why is my voice recording not transcribing correctly?</h3>
      <p>Make sure you have an active internet connection, as voice transcription requires the AI service. Speak clearly and start speaking immediately after tapping record. If issues persist, try restarting the App.</p>

      <h3>How do I set up dream reminders?</h3>
      <p>Go to <strong>Settings</strong> → <strong>Notifications</strong> and enable daily reminders. Choose your preferred time to receive a reminder to log your dreams.</p>

      <h3>Is my dream data private?</h3>
      <p>Yes. All your dream data is stored locally on your device. Only the content you submit for AI analysis is sent to our AI provider (Google Gemini) for processing. We do not store your data on any servers. See our <a href="/morpheo-app/privacy-policy">Privacy Policy</a> for full details.</p>

      <h3>How does the Apple Watch app work?</h3>
      <p>Install the Watch app from the Watch app on your iPhone. You can record dreams directly from your wrist. Recordings sync to your iPhone automatically via Bluetooth.</p>

      <h3>How do I delete a dream?</h3>
      <p>In the dream list, swipe left on any dream and tap <strong>Delete</strong>. This action is permanent.</p>

      <h3>The App is crashing — what should I do?</h3>
      <ol>
        <li>Force-quit and reopen the App.</li>
        <li>Make sure you are running the latest version of Morpheo and iOS.</li>
        <li>If the issue persists, contact us below.</li>
      </ol>

      <hr />

      <h2>Contact Us</h2>
      <p>For additional help, feature requests, or bug reports, please reach out:</p>
      <p>
        <strong>Email</strong>: <a href="mailto:support@somniaapp.com">support@somniaapp.com</a><br />
        <strong>GitHub Issues</strong>: <a href="https://github.com/buraka/morpheo-app/issues">github.com/buraka/morpheo-app/issues</a>
      </p>
      <p>We typically respond within 1–2 business days.</p>
    </LegalPage>
  );
}
