const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border w-full bg-background">
      <div className="container-narrow mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-small">
          <p>© {currentYear} Niranjana Arun Menon</p>
          {/* <p className="text-muted-foreground">
            
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;