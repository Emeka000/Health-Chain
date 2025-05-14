import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Wallet, CreditCard, CheckCircle, Clock, ArrowRightLeft } from "lucide-react";

const Payment = () => {
  const transactions = [
    {
      id: "tx-001",
      title: "NHIS Premium Payment",
      amount: "500 STRK",
      date: "April 15, 2025",
      status: "completed",
      txHash: "0x3a8d7...f92e1"
    },
    {
      id: "tx-002",
      title: "Hospital Co-payment",
      amount: "50 STRK",
      date: "March 30, 2025",
      status: "completed",
      txHash: "0x9c2e5...8b4d2"
    },
    {
      id: "tx-003",
      title: "Prescription Coverage",
      amount: "25 STRK",
      date: "March 17, 2025",
      status: "completed",
      txHash: "0x7d1a3...4c9f8"
    }
  ];

  return (
    <div className="space-y-8 max-md:mt-11">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">NHIS StarkNet Payments</h1>
        <p className="text-muted-foreground">Manage your health insurance payments securely with StarkNet</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center gap-2">
              <Wallet className="h-5 w-5 text-primary" />
              StarkNet Wallet
            </CardTitle>
            <CardDescription>Your connected blockchain wallet</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/50 p-3 rounded-md text-sm font-mono mt-2 break-all">
              0x726ca7dbf13dd9db1b33b8eb9c387d85b4115683eb06f1c67b35a7f2c967a2e9
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Balance</p>
                <p className="text-2xl font-semibold">1,250 STRK</p>
              </div>
              <Badge variant="outline" className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 text-green-600" />
                Connected
              </Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full gap-2">
              <ArrowRightLeft className="h-4 w-4" />
              Manage Wallet
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              NHIS Insurance Status
            </CardTitle>
            <CardDescription>Your current coverage information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mt-2">
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium">Coverage Period</p>
                <Badge variant="outline" className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-green-600" />
                  Active
                </Badge>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span>Current Period (2025)</span>
                  <span>75% complete</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div className="bg-muted/50 p-3 rounded-md">
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <p className="text-muted-foreground">Policy ID:</p>
                  <p className="font-medium">NHIS-2025-58921</p>
                  <p className="text-muted-foreground">Coverage Start:</p>
                  <p className="font-medium">January 1, 2025</p>
                  <p className="text-muted-foreground">Coverage End:</p>
                  <p className="font-medium">December 31, 2025</p>
                  <p className="text-muted-foreground">Next Payment:</p>
                  <p className="font-medium">May 15, 2025</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Make Payment</Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="transactions" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 h-16 md:h-10">
          <TabsTrigger value="transactions">Transaction History</TabsTrigger>
          <TabsTrigger value="coverage">Coverage Details</TabsTrigger>
          <TabsTrigger value="claims">Claims & Reimbursements</TabsTrigger>
        </TabsList>
        <TabsContent value="transactions">
          <div className="space-y-4 mt-4">
            <h3 className="font-semibold">Recent Transactions</h3>
            {transactions.map(tx => (
              <Card key={tx.id}>
                <CardHeader className="py-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-base">{tx.title}</CardTitle>
                      <CardDescription>{tx.date}</CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{tx.amount}</p>
                      <Badge 
                        variant={tx.status === "completed" ? "outline" : "secondary"}
                        className="flex items-center gap-1"
                      >
                        {tx.status === "completed" ? (
                          <CheckCircle className="h-3 w-3 text-green-600" />
                        ) : (
                          <Clock className="h-3 w-3" />
                        )}
                        {tx.status === "completed" ? "Confirmed" : "Pending"}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pb-3">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Transaction Hash: </span>
                    <span className="font-mono">{tx.txHash}</span>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex justify-center mt-4">
              <Button variant="outline">View All Transactions</Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="coverage">
          <div className="p-8 text-center text-muted-foreground">
            <CreditCard className="h-12 w-12 mx-auto mb-4 opacity-20" />
            <h3 className="font-medium text-lg mb-1">Coverage Details</h3>
            <p>View detailed information about your health coverage</p>
          </div>
        </TabsContent>
        <TabsContent value="claims">
          <div className="p-8 text-center text-muted-foreground">
            <Wallet className="h-12 w-12 mx-auto mb-4 opacity-20" />
            <h3 className="font-medium text-lg mb-1">Claims & Reimbursements</h3>
            <p>View and manage your claims and reimbursements</p>
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>StarkNet Integration</CardTitle>
          <CardDescription>Secure, transparent healthcare payments powered by StarkNet</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-card border rounded-lg p-4">
                <Wallet className="h-8 w-8 mx-auto mb-2 text-primary opacity-70" />
                <h4 className="font-medium max-sm:text-sm">Fast Payments</h4>
                <p className="text-xs text-muted-foreground mt-1">Instant settlement with low fees</p>
              </div>
              <div className="bg-card border rounded-lg p-4">
                <CheckCircle className="h-8 w-8 mx-auto mb-2 text-primary opacity-70" />
                <h4 className="font-medium max-sm:text-sm">Verified Claims</h4>
                <p className="text-xs text-muted-foreground mt-1 ">Cryptographically verified claims</p>
              </div>
              <div className="bg-card border rounded-lg p-4">
                <ArrowRightLeft className="h-8 w-8 mx-auto mb-2 text-primary opacity-70" />
                <h4 className="font-medium max-sm:text-sm">Transparent</h4>
                <p className="text-xs text-muted-foreground mt-1">Full transaction history</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Health-Chain uses StarkNet's Layer 2 blockchain technology to provide secure, 
              transparent, and efficient healthcare payments. Zero-knowledge proofs ensure your 
              payment information remains private while still being verifiable.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">Learn More About StarkNet Integration</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Payment;
