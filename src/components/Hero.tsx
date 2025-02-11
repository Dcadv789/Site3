'use client';

import React from 'react';
import { Share2, Youtube, Instagram, Linkedin, Wallet, Target, TrendingUp, Percent } from 'lucide-react';
import { motion } from "framer-motion"
import Image from 'next/image';

export function Hero() {
  const handleCtaClick = () => {
    window.open('https://wa.me/5511999999999', '_blank');
  };

  const stats = [
    { icon: Wallet, label: '+2,5M', description: 'Gerenciados' },
    { icon: Target, label: '100%', description: 'Foco' },
    { icon: TrendingUp, label: '99%', description: 'Satisfação' },
    { icon: Percent, label: '29%', description: 'Economia Gerada' },
  ];

  const socialLinks = [
    { 
      icon: Share2, 
      href: 'https://wa.me/?text=Confira este serviço de consultoria financeira: https://dcadvisors.com.br',
      label: 'Compartilhar'
    },
    { 
      icon: Instagram, 
      href: '#',
      label: 'Instagram'
    },
    { 
      icon: Youtube, 
      href: '#',
      label: 'Youtube'
    },
    { 
      icon: Linkedin, 
      href: '#',
      label: 'LinkedIn'
    }
  ];

  return (
    <section id="inicio" className="pt-16 scroll-mt-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-32 sm:pb-28">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-gray-900 leading-[1.1]"
          >
            Somos o <span className="text-blue-600">novo financeiro</span> da sua empresa!
          </motion.h1>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7 flex items-end">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative w-full"
            >
              <Image
                src="https://aznchizusxvfegpubttp.supabase.co/storage/v1/object/public/logos//banner1.svg"
                alt="Banner ilustrativo"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col h-full justify-between"
            >
              <div className="w-full">
                <h2 className="text-xl font-medium text-gray-900 mb-6 text-left">
                  O futuro do seu financeiro começa aqui: inovação, estratégia e crescimento. Faça um diagnóstico financeiro gratuito e descubra como evoluir!
                </h2>
              </div>

              <div className="w-full">
                <div className="flex flex-col items-end gap-4">
                  <div className="flex items-center justify-between w-full">
                    <button
                      onClick={handleCtaClick}
                      className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white text-base font-medium transition-all duration-300 hover:shadow-lg"
                    >
                      Diagnóstico Gratuito
                    </button>

                    <div className="flex gap-3 justify-end w-72">
                      {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                          <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition-colors bg-white shadow-sm p-2 rounded-full hover:shadow-md group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (index * 0.1) }}
                            whileHover={{ y: -2 }}
                          >
                            <Icon size={20} className="group-hover:scale-110 transition-transform" />
                            <span className="sr-only">{social.label}</span>
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex gap-8 items-end justify-end">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="grid grid-cols-2 gap-4"
                    >
                      {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + (index * 0.1) }}
                            className="flex flex-col items-center bg-white/50 backdrop-blur-sm p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                          >
                            <Icon className="h-5 w-5 text-blue-600 mb-1" />
                            <span className="text-base font-semibold text-gray-900">{stat.label}</span>
                            <span className="text-xs text-gray-600 text-center">{stat.description}</span>
                          </motion.div>
                        );
                      })}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="w-64"
                    >
                      <Image
                        src="https://aznchizusxvfegpubttp.supabase.co/storage/v1/object/public/logos//banner2.svg"
                        alt="Banner secundário"
                        width={256}
                        height={256}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}