import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Trust</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/security" className="text-gray-300 hover:text-white transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-gray-300 hover:text-white transition-colors">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-gray-300 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-gray-300">+1-800-SKILL-SS</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-gray-300">hello@skillandservice.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-gray-300">Albany, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Phone className="h-6 w-6 text-sky-500" />
            <span className="text-lg font-bold">Skillandservice Solutions</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">© 2024 Skillandservice Solutions. All rights reserved.</p>
            <p className="text-sm text-gray-500">
              <Link
                href="https://salescentri.com?utm_source=skillandservice.com&utm_medium=footer&utm_campaign=partner_network"
                className="text-black hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by Sales Intelligence Platform →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
