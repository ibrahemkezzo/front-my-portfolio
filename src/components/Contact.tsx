
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t('contact.success'),
        description: `Thanks ${formData.name}, I'll get back to you soon!`,
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, url: 'https://github.com/', label: 'GitHub' },
    { icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com/in/', label: 'LinkedIn' },
    { icon: <Mail className="h-5 w-5" />, url: 'mailto:contact@example.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <div className="space-y-4 text-center">
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle mx-auto">{t('contact.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div className="space-y-6 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-laravel focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-laravel focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-laravel focus:border-transparent transition-all"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary w-full flex justify-center items-center ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  t('contact.send')
                )}
              </button>
            </form>
          </div>
          
          <div className="glass p-8 rounded-2xl animate-fade-in-right">
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  I'm currently available for freelance work. If you have a project that you want to get started or think you need my help with something, then get in touch.
                </p>
                
                <div className="flex flex-wrap gap-3 mt-6">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-background hover:bg-laravel hover:text-white transition-colors"
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3">Working Hours</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
