const CertificatesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Diplome i sertifikati</h2>
          <p className="text-xl text-muted-foreground">Svetlana Prokić, diplomirani psiholog i geštalt terapeut</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-muted p-8 rounded-lg text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl text-white">🎓</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Filozofski fakultet</h3>
            <p className="text-muted-foreground">Novi Sad – Psihologija</p>
          </div>

          <div className="bg-muted p-8 rounded-lg text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl text-white">📜</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Geštalt terapeut</h3>
            <p className="text-muted-foreground">Sertifikat</p>
          </div>

          <div className="bg-muted p-8 rounded-lg text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl text-white">🏆</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">EAGT</h3>
            <p className="text-muted-foreground">Evropsko udruženje</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
