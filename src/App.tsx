import { Crown, Settings, Shield, Users, ExternalLink } from 'lucide-react'
import { Card, CardContent } from './components/ui/card'
import { Button } from './components/ui/button'
import { motion } from 'framer-motion'

const staffMembers = [
  { name: "CHINWI", role: "Server Owner + Developer", icon: Crown, color: "text-yellow-400" },
  { name: "PATCHIKA", role: "Owner", icon: Crown, color: "text-yellow-400" },
  { name: "emeland85", role: "Developer", icon: Settings, color: "text-blue-400" },
  { name: "Rafikosp", role: "Co-Owner", icon: Users, color: "text-orange-400" },
  { name: "FNX", role: "Co-Owner", icon: Users, color: "text-orange-400" },
  { name: "DaDi", role: "Founder", icon: Crown, color: "text-purple-400" },
  { name: "rabeh tomraider", role: "Manager", icon: Shield, color: "text-green-400" },
  { name: "DIMITRI", role: "Senior Admin", icon: Shield, color: "text-red-400" },
  { name: "CHAMSOALI", role: "Admin", icon: Shield, color: "text-red-500" },
  { name: "Dexter Gaming", role: "Admin", icon: Shield, color: "text-red-500" },
  { name: "Hamza gaming Dz", role: "Senior Moderator", icon: Settings, color: "text-cyan-400" },
  { name: "CANON", role: "Moderator", icon: Settings, color: "text-indigo-400" },
  { name: "Luffy", role: "Moderator", icon: Settings, color: "text-indigo-400" },
  { name: "Alilou Ghost", role: "Moderator", icon: Settings, color: "text-indigo-400" },
  { name: "Whis", role: "Developer", icon: Settings, color: "text-blue-400" }
]

const rules = [
  "احترام الجميع داخل السيرفر",
  "يمنع السب والشتم أو العنصرية", 
  "الالتزام بقوانين الـ RP وعدم الخروج عن الدور",
  "يمنع استخدام برامج غش أو استغلال الثغرات",
  "التواصل مع الإدارة عبر التذكرة في حال وجود مشاكل"
]

const whitelistQuestions = [
  "الاسم داخل اللعبة:",
  "العمر:",
  "هل لديك خبرة في RP؟",
  "لماذا تريد الانضمام؟"
]

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 to-red-700 border-b border-red-500/30">
        <div className="container mx-auto px-4 py-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl font-bold text-white mb-2">RedZone</h1>
            <p className="text-xl text-red-100 font-semibold">Roleplay Community</p>
          </motion.div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="#" className="text-white hover:text-red-400 font-semibold transition-colors">
              الرئيسية
            </a>
            <a href="#rules" className="text-white hover:text-red-400 font-semibold transition-colors">
              القوانين
            </a>
            <a href="#whitelist" className="text-white hover:text-red-400 font-semibold transition-colors">
              Whitelist
            </a>
            <a 
              href="https://discord.gg/3xcX57Zr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-red-400 font-semibold transition-colors flex items-center gap-2"
            >
              دخول الديسكورد
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-bg h-96 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
            مرحباً بكم في RedZone Roleplay!
          </h1>
          <p className="text-xl md:text-2xl text-red-100 font-semibold">
            أفضل سيرفر روليبلاي عربي
          </p>
        </motion.div>
      </section>

      {/* Staff Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">فريق الإدارة</h2>
            <p className="text-slate-300 text-lg">تعرف على فريق العمل المتميز</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {staffMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/80 border-slate-700 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <member.icon className={`w-8 h-8 ${member.color}`} />
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">
                      @⤹ 𝙍𝙕 ❜ {member.name}
                    </h3>
                    <p className={`text-sm font-semibold ${member.color}`}>
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">القوانين</h2>
            <p className="text-slate-300 text-lg">قوانين السيرفر الأساسية</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/80 border-slate-700">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {rules.map((rule, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 rounded-lg bg-slate-700/50 border border-slate-600"
                    >
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-slate-100 text-lg flex-1 text-right">{rule}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Whitelist Section */}
      <section id="whitelist" className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Whitelist</h2>
            <p className="text-slate-300 text-lg">انضم إلى مجتمعنا المميز</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/80 border-slate-700">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <p className="text-slate-100 text-xl mb-6">
                    للانضمام إلى السيرفر، يرجى تعبئة النموذج التالي:
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {whitelistQuestions.map((question, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 rounded-lg bg-slate-700/50 border border-slate-600"
                    >
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-slate-100 text-lg flex-1 text-right">{question}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center">
                  <Button
                    asChild
                    className="bg-[#5865F2] hover:bg-[#5865F2]/90 text-white px-8 py-4 text-lg font-semibold"
                  >
                    <a 
                      href="https://discord.gg/3xcX57Zr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      فتح تذكرة عبر Discord
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            تم التصميم بواسطة DaDi - جميع الحقوق محفوظة © 2025
          </p>
          <p className="text-slate-500 text-sm mt-2">
            RedZone Roleplay Community
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App