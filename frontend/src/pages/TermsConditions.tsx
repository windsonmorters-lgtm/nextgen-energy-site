import { motion } from 'framer-motion'
import { FileText, Scale, Gavel, AlertCircle, CheckCircle, Mail, Phone } from 'lucide-react'

export default function TermsConditions() {
  const sections = [
    {
      icon: FileText,
      title: 'Acceptance of Terms',
      content: `By accessing or using the Naxen Exim India Energy website, products, or services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.

      These Terms constitute a legally binding agreement between you and Naxen Exim India Energy Industries Limited regarding your use of our website and services.`
    },
    {
      icon: Scale,
      title: 'Use of Website',
      content: `You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.

      Prohibited activities include:
      • Using the website in any way that causes damage or affects availability
      • Attempting to gain unauthorized access to our systems
      • Transmitting viruses, malware, or other harmful code
      • Collecting or harvesting personal data without consent
      • Using our content for commercial purposes without permission`
    },
    {
      icon: Gavel,
      title: 'Intellectual Property',
      content: `All content on this website, including text, graphics, logos, images, and software, is the property of Naxen Exim India Energy Industries Limited or its content suppliers and is protected by Indian and international copyright laws.

      You may not:
      • Reproduce, duplicate, copy, or resell any part of our website
      • Use our trademarks or logos without written permission
      • Create derivative works from our content
      • Remove any copyright or proprietary notices`
    },
    {
      icon: CheckCircle,
      title: 'Product Information and Pricing',
      content: `We strive to provide accurate product information and pricing. However:
      
      • All product descriptions and specifications are subject to change
      • Prices are subject to change without prior notice
      • We reserve the right to discontinue any product at any time
      • Colors and images may vary from actual products
      • All orders are subject to availability and acceptance
      
      For accurate pricing and availability, please contact our sales team.`
    },
    {
      icon: AlertCircle,
      title: 'Limitation of Liability',
      content: `To the fullest extent permitted by applicable law, Naxen Exim India Energy Industries Limited shall not be liable for:
      
      • Any indirect, incidental, special, or consequential damages
      • Loss of profits, revenue, data, or business opportunities
      • Damages arising from website unavailability or technical issues
      • Damages related to the use or inability to use our products
      • Claims arising from third-party content or links
      
      Our total liability shall not exceed the amount you paid for the specific product or service giving rise to the claim.`
    },
    {
      icon: Scale,
      title: 'Warranty and Returns',
      content: `Our products come with standard manufacturer warranties as specified in product documentation:
      
      • Standard warranty: 3 years from date of purchase
      • Extended warranty: Available for select products
      • Warranty covers manufacturing defects only
      • Physical damage, misuse, and unauthorized modifications void warranty
      
      Return Policy:
      • Returns accepted within 7 days of delivery
      • Products must be unused and in original packaging
      • Custom orders are non-returnable
      • Refunds processed within 15 business days`
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
              <Scale className="w-10 h-10 text-accent-green" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Please read these Terms and Conditions carefully before using our website 
              and services. By using our website, you agree to these terms.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last Updated: January 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Agreement Notice */}
      <section className="py-8 bg-amber-50 border-b border-amber-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-800 mb-1">Important Notice</h3>
              <p className="text-amber-700 text-sm">
                By accessing or using our website, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms and Conditions. If you do not agree with any 
                part of these terms, you must not use our website or services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
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
                    <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-accent-cyan" />
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

      {/* Additional Terms */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-950 mb-6">Additional Provisions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">Governing Law</h3>
              <p className="text-gray-600 leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with 
                the laws of India. Any disputes arising under these Terms shall be subject to 
                the exclusive jurisdiction of the courts in Noida, Uttar Pradesh, India.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">Severability</h3>
              <p className="text-gray-600 leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable, the 
                remaining provisions shall continue to be valid and enforceable to the fullest 
                extent permitted by law.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">Waiver</h3>
              <p className="text-gray-600 leading-relaxed">
                Our failure to enforce any right or provision of these Terms shall not constitute 
                a waiver of such right or provision. Any waiver must be in writing and signed by 
                an authorized representative of Naxen Exim India Energy.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">Assignment</h3>
              <p className="text-gray-600 leading-relaxed">
                You may not assign or transfer these Terms or your rights under these Terms without 
                our prior written consent. We may assign these Terms without restriction.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">Entire Agreement</h3>
              <p className="text-gray-600 leading-relaxed">
                These Terms, together with our Privacy Policy, constitute the entire agreement 
                between you and Naxen Exim India Energy regarding your use of our website and services.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">Changes to Terms</h3>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective 
                immediately upon posting on this page. Your continued use of the website after 
                changes constitutes acceptance of the modified Terms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">Third-Party Links</h3>
              <p className="text-gray-600 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for 
                the content, privacy policies, or practices of any third-party websites. We 
                encourage you to review the terms and conditions of any third-party sites you visit.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">Force Majeure</h3>
              <p className="text-gray-600 leading-relaxed">
                We shall not be liable for any failure or delay in performing our obligations 
                where such failure or delay results from circumstances beyond our reasonable 
                control, including natural disasters, pandemics, war, terrorism, or government 
                actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About These Terms?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            If you have any questions or concerns about these Terms and Conditions, 
            please contact us:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:legal@Naxen Exim Indiaenergy.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-green text-slate-950 font-bold rounded-lg hover:bg-accent-green/80 transition"
            >
              <Mail className="w-5 h-5" />
              legal@Naxen Exim Indiaenergy.com
            </a>
            <a
              href="tel:+9101204291595"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition"
            >
              <Phone className="w-5 h-5" />
              +91 0120-4291595
            </a>
          </div>
          <p className="text-gray-500 mt-8">
            Naxen Exim India Energy Industries Limited<br />
            Plot No. 123, Sector 63, Noida, Uttar Pradesh - 201301, India
          </p>
        </div>
      </section>
    </div>
  )
}
