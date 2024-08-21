// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 My Website. All rights reserved.</p>
        <p>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>{" "}
          |
          <a href="/terms" className="hover:underline ml-2">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
}
