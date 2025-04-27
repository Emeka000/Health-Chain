
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShieldCheck, Clock, AlertCircle, Lock } from "lucide-react";

const Access = () => {
  const accessRequests = [
    {
      id: "req001",
      provider: "Dr. Sarah Johnson",
      hospital: "Central Medical Center",
      type: "Doctor",
      date: "April 21, 2025",
      status: "pending",
      avatar: "SJ"
    }
  ];

  const activeProviders = [
    {
      id: "prov001",
      provider: "Dr. Michael Chen",
      hospital: "Memorial Hospital",
      type: "Primary Care",
      since: "January 10, 2025",
      lastAccess: "April 18, 2025",
      avatar: "MC"
    },
    {
      id: "prov002",
      provider: "Dr. Emily Rodriguez",
      hospital: "Heartcare Specialists",
      type: "Cardiologist",
      since: "February 5, 2025",
      lastAccess: "April 15, 2025",
      avatar: "ER"
    },
    {
      id: "prov003",
      provider: "Dr. James Wilson",
      hospital: "City Health Center",
      type: "Neurologist",
      since: "March 12, 2025",
      lastAccess: "April 10, 2025",
      avatar: "JW"
    }
  ];

  return (
    <div className="space-y-8 max-md:mt-11">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Access Control</h1>
        <p className="text-muted-foreground">Manage who can access your health records</p>
      </div>

      <div className="bg-card p-5 rounded-lg border flex items-center space-x-4">
        <div className="bg-primary/10 p-3 rounded-full">
          <Lock className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="font-medium">Zero-Knowledge Proof Encryption</h3>
          <p className="text-sm text-muted-foreground">Your data is protected with advanced cryptographic security</p>
        </div>
      </div>

      {accessRequests.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-orange-accent" />
            Pending Access Requests
          </h2>
          
          {accessRequests.map(request => (
            <Card key={request.id} className="border-orange-accent/30 bg-orange-accent/5">
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{request.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">{request.provider}</CardTitle>
                      <CardDescription>{request.hospital}</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-orange-accent">Pending</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm mt-2">
                  <div>
                    <span className="text-muted-foreground">Provider Type:</span>
                    <span className="ml-2 font-medium">{request.type}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Requested On:</span>
                    <span className="ml-2 font-medium">{request.date}</span>
                  </div>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline">Deny</Button>
                  <Button>Approve Access</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-primary" />
          Active Access Permissions
        </h2>
        
        {activeProviders.map(provider => (
          <Card key={provider.id}>
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{provider.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{provider.provider}</CardTitle>
                    <CardDescription>{provider.hospital}</CardDescription>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mt-2">
                <div>
                  <span className="text-muted-foreground">Provider Type:</span>
                  <span className="ml-2 font-medium">{provider.type}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Access Since:</span>
                  <span className="ml-2 font-medium">{provider.since}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Last Accessed:</span>
                  <span className="ml-2 font-medium">{provider.lastAccess}</span>
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" size="sm">View Access Log</Button>
                <Button variant="outline" size="sm" className="text-destructive">Revoke Access</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="rounded-lg border p-6 text-center space-y-2">
        <h3 className="font-medium">Advanced Access Controls</h3>
        <p className="text-sm text-muted-foreground">
          Set up granular permissions to specify exactly what data providers can access
        </p>
        <Button variant="outline" className="mt-4">Configure Advanced Settings</Button>
      </div>
    </div>
  );
};

export default Access;


