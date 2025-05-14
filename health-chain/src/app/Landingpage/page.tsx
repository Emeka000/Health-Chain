import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Heart, ShieldCheck, Wallet, Hospital, ArrowRight, CheckCircle, Lock } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Health-Chain</span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm font-medium hover:text-primary">Features</a>
              <a href="#about" className="text-sm font-medium hover:text-primary">About</a>
              <a href="#security" className="text-sm font-medium hover:text-primary">Security</a>
            </nav>
            <Button asChild>
              <Link href="/dashboard">Enter App</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-blue-light to-background">
          <div className="container flex flex-col items-center text-center">
            <Badge className="mb-4">Blockchain-Powered Healthcare</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mb-6">
              Your Health Records. Your Control.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-10">
              Health-Chain gives you complete ownership of your medical history through
              secure, blockchain technology and zero-knowledge proofs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/dashboard">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#features">Learn More</a>
              </Button>
            </div>
            
            <div className="mt-16 relative w-full max-w-4xl">
              <div className="bg-card rounded-xl shadow-xl overflow-hidden border">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                  alt="Health-Chain Dashboard Preview" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <div className="font-semibold">Secure and Transparent</div>
                <div className="text-sm opacity-90">Blockchain-verified records</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <p className="text-muted-foreground">
                Health-Chain combines the power of blockchain with healthcare to create a secure, patient-centered ecosystem.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Hospital className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Decentralized Records</h3>
                <p className="text-muted-foreground">
                  Your complete medical history stored securely on the blockchain, accessible anywhere, anytime.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Zero-Knowledge Access</h3>
                <p className="text-muted-foreground">
                  Grant specific access to healthcare providers without exposing your entire medical history.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Wallet className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">StarkNet Payments</h3>
                <p className="text-muted-foreground">
                  Streamlined NHIS insurance payments with the security and efficiency of the StarkNet ecosystem.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" asChild>
                <a href="#about" className="inline-flex items-center gap-2">
                  More About Health-Chain
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-5 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">About Health-Chain </h2>
                <p className="text-muted-foreground mb-6">
                  Health-Chain  represents a paradigm shift in healthcare record management. By leveraging blockchain technology, we empower patients with unprecedented control over their medical data.
                </p>
                <p className="text-muted-foreground mb-6">
                  Each patient is assigned a unique blockchain identity—represented as an NFT or soulbound token—that securely stores encrypted medical records. This provides an immutable, verifiable history that can't be altered or accessed without explicit permission.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-sm">Patient-owned medical records that travel with you across providers</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-sm">Healthcare providers update records via secure smart contracts</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-sm">StarkNet integration for seamless NHIS insurance payments</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-xl border">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                    alt="Blockchain Technology" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card border p-4 rounded-lg shadow-lg">
                  <div className="font-semibold">Blockchain Identity</div>
                  <div className="text-sm text-muted-foreground">NFT / Soulbound Token</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section id="security" className="py-20">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Security & Privacy</h2>
              <p className="text-muted-foreground">
                Health-Chain Nexus implements cutting-edge cryptographic techniques to ensure your medical data remains private and secure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-xl border">
                <h3 className="text-xl font-semibold mb-4">Zero-Knowledge Proofs</h3>
                <p className="text-muted-foreground mb-6">
                  Our platform uses zero-knowledge proof technology that allows you to prove you possess certain medical information without revealing the actual data.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Patient Data</span>
                    <Lock className="h-4 w-4 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-primary/20 rounded-full w-full overflow-hidden">
                      <div className="h-full bg-primary w-3/4 rounded-full"></div>
                    </div>
                    <div className="h-2 bg-primary/20 rounded-full w-full overflow-hidden">
                      <div className="h-full bg-primary w-1/2 rounded-full"></div>
                    </div>
                    <div className="h-2 bg-primary/20 rounded-full w-full overflow-hidden">
                      <div className="h-full bg-primary w-5/6 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Encrypted data is verified without being exposed
                  </p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-xl border">
                <h3 className="text-xl font-semibold mb-4">Blockchain Identity</h3>
                <p className="text-muted-foreground mb-6">
                  Your unique blockchain identity serves as the secure key to your medical history, represented as a non-fungible token that cannot be duplicated or forged.
                </p>
                <div className="border rounded-lg p-6 bg-muted/30">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Patient Identity Token</div>
                      <div className="text-sm text-muted-foreground">#8734-2900-1257-3991</div>
                    </div>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <span className="text-muted-foreground">Records Count:</span>
                      <span className="font-medium">12</span>
                      <span className="text-muted-foreground">Last Updated:</span>
                      <span className="font-medium">April 21, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button size="lg" asChild>
                <Link href="/dashboard">Start Using Health-Chain</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-card">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Heart className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Health-Chain</span>
            </div>
            <nav className="flex gap-6 mb-4 md:mb-0">
              <a href="#features" className="text-sm hover:text-primary">Features</a>
              <a href="#about" className="text-sm hover:text-primary">About</a>
              <a href="#security" className="text-sm hover:text-primary">Security</a>
            </nav>
            <div className="text-sm text-muted-foreground">
              &copy; 2025 Health-Chain. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;


