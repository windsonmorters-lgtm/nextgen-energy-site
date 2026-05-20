import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, DollarSign, ChevronRight, GraduationCap, Users, Rocket, Target, Award } from 'lucide-react'
import { useState } from 'react'

export default function Career() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)

  const benefits = [
    { icon: DollarSign, title: 'Competitive Salary', desc: 'Industry-leading compensation packages' },
    { icon: Target, title: 'Growth Opportunities', desc: 'Clear career progression paths' },
    { icon: GraduationCap, title: 'Learning & Development', desc: 'Continuous training and skill building' },
    { icon: Users, title: 'Great Culture', desc: 'Collaborative and innovative work environment' },
    { icon: Rocket, title: 'Cutting-Edge Tech', desc: 'Work with latest battery technologies' },
    { icon: Award, title: 'Recognition', desc: 'Rewards for outstanding performance' },
  ]

  const openings = [
    {
      id: 1,
      title: 'Welding Machine Design Engineer',
      department: 'Engineering',
      location: 'Noida, UP',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹6-10 LPA',
      description: 'Design and develop welding machines for battery manufacturing processes.',
      requirements: ['B.Tech in Mechanical/Electrical Engineering', 'Experience in welding equipment design', 'Knowledge of CAD software'],
    },
    {
      id: 2,
      title: 'Sales Manager',
      department: 'Sales',
      location: 'Delhi NCR',
      type: 'Full-time',
      experience: '5-8 years',
      salary: '₹8-15 LPA',
      description: 'Lead sales team and drive revenue growth across EV and ESS segments.',
      requirements: ['MBA in Sales/Marketing preferred', 'Experience in B2B sales', 'Knowledge of battery/EV industry'],
    },
    {
      id: 3,
      title: 'Welding Technician',
      department: 'Production',
      location: 'Greater Noida',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹3-5 LPA',
      description: 'Operate and maintain welding equipment in battery assembly line.',
      requirements: ['ITI/Diploma in relevant trade', 'Experience in industrial welding', 'Knowledge of safety protocols'],
    },
    {
      id: 4,
      title: 'Quality Control Inspector',
      department: 'Quality',
      location: 'Noida, UP',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹3-6 LPA',
      description: 'Inspect battery products to ensure quality standards are met.',
      requirements: ['B.Tech/Diploma in Electronics/Electrical', 'Experience in QC processes', 'Attention to detail'],
    },
    {
      id: 5,
      title: 'Electrical Engineer',
      department: 'R&D',
      location: 'Noida, UP',
      type: 'Full-time',
      experience: '3-6 years',
      salary: '₹5-12 LPA',
      description: 'Design and develop electrical systems for lithium battery packs.',
      requirements: ['B.Tech/M.Tech in Electrical Engineering', 'Experience in battery systems', 'Knowledge of BMS design'],
    },
    {
      id: 6,
      title: 'Customer Support Engineer',
      department: 'Support',
      location: 'Delhi NCR',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹3-6 LPA',
      description: 'Provide technical support to customers for battery products.',
      requirements: ['B.Tech in Electronics/Electrical', 'Good communication skills', 'Problem-solving abilities'],
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent-green rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-cyan rounded-full filter blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-accent-green/20 rounded-full flex items-center justify-center">
              <Briefcase className="w-10 h-10 text-accent-green" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Careers</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join Our Team and Build the Future of Energy Storage
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Be part of India's leading lithium battery manufacturer. We're looking for 
              passionate individuals who want to make a difference in sustainable energy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-950 mb-4">Why Work With Us?</h2>
            <p className="text-gray-600">We offer more than just a job - we offer a career</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-accent-green/50 transition"
              >
                <div className="w-12 h-12 bg-accent-green/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-accent-green" />
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-950 mb-4">Current Openings</h2>
            <p className="text-gray-600">Find your perfect role and join our growing team</p>
          </div>

          <div className="space-y-4">
            {openings.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden"
              >
                <div
                  className="p-6 cursor-pointer hover:bg-slate-50 transition"
                  onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-slate-950">{job.title}</h3>
                        <span className="px-3 py-1 bg-accent-green/10 text-accent-green rounded-full text-xs font-semibold">
                          {job.department}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.experience}
                        </span>
                        <span className="flex items-center gap-1 text-accent-cyan font-semibold">
                          <DollarSign className="w-4 h-4" />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <ChevronRight 
                      className={`w-6 h-6 text-gray-400 transition ${selectedJob === job.id ? 'rotate-90' : ''}`} 
                    />
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedJob === job.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="border-t border-slate-200 p-6 bg-slate-50"
                  >
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    <h4 className="font-bold text-slate-950 mb-3">Requirements:</h4>
                    <ul className="space-y-2 mb-6">
                      {job.requirements.map((req, ridx) => (
                        <li key={ridx} className="flex items-center gap-2 text-gray-600">
                          <div className="w-1.5 h-1.5 bg-accent-green rounded-full" />
                          {req}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="mailto:careers@Naxen Exim Indiaenergy.com?subject=Application for {job.title}"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent-green text-slate-950 font-bold rounded-lg hover:bg-accent-green/80 transition"
                    >
                      Apply Now
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-950 mb-4">How to Apply</h2>
            <p className="text-gray-600">Ready to join us? Here's how to get started</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Find a Role', desc: 'Browse our current openings and find a position that matches your skills' },
              { step: '2', title: 'Submit Application', desc: 'Send your resume and cover letter to careers@Naxen Exim Indiaenergy.com' },
              { step: '3', title: 'Interview Process', desc: 'Our team will review and schedule interviews with shortlisted candidates' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent-green to-accent-cyan rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-accent-green to-accent-cyan">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-950 mb-4">Don't See a Suitable Role?</h2>
          <p className="text-lg text-slate-900 mb-8">
            We're always looking for talented individuals. Send us your resume and we'll 
            keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:careers@Naxen Exim Indiaenergy.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-950 text-accent-green font-bold rounded-lg hover:shadow-2xl transition"
            >
              <Briefcase className="w-5 h-5" />
              Send Your Resume
            </a>
            <a
              href="mailto:careers@Naxen Exim Indiaenergy.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-950 text-slate-950 font-bold rounded-lg hover:bg-slate-950/10 transition"
            >
              careers@Naxen Exim Indiaenergy.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
