import { motion } from 'framer-motion'
import { Shield, FileText, Lock, Eye, Database, Mail } from 'lucide-react'

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: `We collect information that you provide directly to us, including:
      
      • Personal identification information (name, email address, phone number)
      • Business information (company name, job title)
      • Usage data and preferences
      • Technical information (IP address, browser type, device information)
      • Communication records when you contact us`
    },
    {
      icon: Database,
      title: 'How We Use Your Information',
      content: `We use the information we collect to:
      
      • Provide and maintain our products and services
      • Process your orders and transactions
      • Communicate with you about products, services, and promotions
      • Improve our website and customer experience
      • Comply with legal obligations
      • Detect and prevent fraud or security issues`
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: `We implement appropriate technical and organizational security measures to protect your personal information:
      
      • Encryption of sensitive data in transit and at rest
      • Regular security assessments and updates
      • Access controls and authentication mechanisms
      • Employee training on data protection practices
      • Secure data centers with restricted access`
    },
    {
      icon: Shield,
      title: 'Information Sharing',
      content: `We do not sell or rent your personal information to third parties. We may share your information with:
      
      • Service providers who assist in our business operations
      • Legal authorities when required by law
      • Business partners with your consent
      • Successors in case of merger, acquisition, or sale of assets
      
      All third parties are bound by confidentiality agreements and data protection requirements.`
    },
    {
      icon: FileText,
      title: 'Cookies and Tracking',
      content: `Our website uses cookies and similar technologies to:
      
      • Remember your preferences and settings
      • Analyze website traffic and usage patterns
      • Deliver personalized content and advertisements
      • Improve website functionality and performance
      
      You can control cookie settings through your browser preferences.`
    },
    {
      icon: Mail,
      title: 'Your Rights',
      content: `You have the following rights regarding your personal information:
      
      • Access: Request a copy of your personal data
      • Correction: Update or correct inaccurate information
      • Deletion: Request deletion of your personal data
      • Objection: Object to certain processing activities
      • Portability: Request transfer of your data
      • Withdraw Consent: Withdraw consent at any time
      
      To exercise these rights, please contact us at privacy@nextgenenergy.com`
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-accent-green/20 rounded-full flex items-center justify-center">
              <Shield className="w-10 h-10 text-accent-green" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Your privacy is important to us. This Privacy Policy explains how we collect, 
              use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last Updated: January 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-700 leading-relaxed">
            NextGen Energy Industries Limited ("we," "our," or "us") is committed to protecting 
            your privacy. This Privacy Policy describes how we handle your personal information 
            when you visit our website, use our products or services, or interact with us.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            By using our website and services, you agree to the collection and use of information 
            in accordance with this policy. If you do not agree with this policy, please do not 
            use our website or services.
          </p>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-accent-green" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-950">{section.title}</h2>
                  </div>
                  <div className="pl-16">
                    <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-950 mb-4">Data Retention</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We retain your personal information for as long as necessary to fulfill the purposes 
            outlined in this Privacy Policy, unless a longer retention period is required or 
            permitted by law. When we no longer need your personal information, we will securely 
            delete or anonymize it.
          </p>
          <ul className="space-y-2 text-gray-600 ml-6">
            <li>• Account information: Retained until account deletion</li>
            <li>• Transaction records: Retained for 7 years for legal compliance</li>
            <li>• Marketing preferences: Retained until you unsubscribe</li>
            <li>• Website analytics: Retained for 2 years</li>
          </ul>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-950 mb-4">Children's Privacy</h2>
          <p className="text-gray-600 leading-relaxed">
            Our services are not intended for individuals under the age of 18. We do not knowingly 
            collect personal information from children. If we become aware that we have collected 
            personal information from a child without parental consent, we will take steps to delete 
            that information.
          </p>
        </div>
      </section>

      {/* Changes to Policy */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-950 mb-4">Changes to This Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes 
            by posting the new policy on this page and updating the "Last Updated" date. We 
            encourage you to review this Privacy Policy periodically for any changes.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            If you have any questions about this Privacy Policy or our data practices, 
            please contact us:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:privacy@nextgenenergy.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-green text-slate-950 font-bold rounded-lg hover:bg-accent-green/80 transition"
            >
              <Mail className="w-5 h-5" />
              privacy@nextgenenergy.com
            </a>
            <a
              href="mailto:info@nextgenenergy.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition"
            >
              info@nextgenenergy.com
            </a>
          </div>
          <p className="text-gray-500 mt-8">
            NextGen Energy Industries Limited<br />
            Plot No. 123, Sector 63, Noida, Uttar Pradesh - 201301, India
          </p>
        </div>
      </section>
    </div>
  )
}
