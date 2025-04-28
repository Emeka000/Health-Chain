import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Hospital, Shield, Lock } from "lucide-react";

const Records = () => {
  const medicalRecords = [
    {
      id: "rec-001",
      title: "Annual Physical Examination",
      provider: "Memorial Hospital",
      date: "April 10, 2025",
      type: "Examination",
      status: "Verified",
      secure: true
    },
    {
      id: "rec-002",
      title: "COVID-19 Vaccination",
      provider: "City Health Center",
      date: "March 15, 2025",
      type: "Vaccination",
      status: "Verified",
      secure: true
    },
    {
      id: "rec-003",
      title: "Blood Test Results",
      provider: "LabCorp Analysis",
      date: "February 22, 2025",
      type: "Test",
      status: "Verified",
      secure: true
    },
    {
      id: "rec-004",
      title: "Dental Cleaning",
      provider: "Smile Dental Clinic",
      date: "January 18, 2025",
      type: "Dental",
      status: "Verified",
      secure: true
    },
    {
      id: "rec-005",
      title: "Allergy Consultation",
      provider: "Allergy Associates",
      date: "December 5, 2024",
      type: "Consultation",
      status: "Verified",
      secure: true
    }
  ];

  return (
    <div className="space-y-8 max-md:mt-11">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">My Health Records</h1>
        <p className="text-muted-foreground">Securely stored on the blockchain and accessible only with your permission</p>
      </div>

      <div className="bg-card p-5 rounded-lg border flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">Your records are secured with blockchain technology</h3>
            <p className="text-sm text-muted-foreground">Records are encrypted and accessible only with your private key</p>
          </div>
        </div>
        <Button variant="outline" className="gap-2 mt-5">
          <Lock className="h-4 w-4" />
          Record Access Log
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Records</TabsTrigger>
          <TabsTrigger value="test">Test Results</TabsTrigger>
          <TabsTrigger value="vaccination">Vaccinations</TabsTrigger>
          <TabsTrigger value="consultation">Consultations</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid gap-4 mt-4">
            {medicalRecords.map((record) => (
              <Card key={record.id} className="overflow-hidden">
                <CardHeader className="p-4 pb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{record.title}</CardTitle>
                      <CardDescription>{record.provider}</CardDescription>
                    </div>
                    <Badge variant={record.secure ? "outline" : "destructive"} className="gap-1">
                      {record.secure && <Shield className="h-3 w-3" />}
                      {record.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Hospital className="h-4 w-4 text-muted-foreground" />
                      <span>{record.type}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Date: </span>
                      {record.date}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Button variant="outline" size="sm">View Details</Button>
                  <Button variant="outline" size="sm">
                    <Shield className="h-4 w-4 mr-1" />
                    Access Control
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="test">
          <div className="p-8 text-center text-muted-foreground">
            <Hospital className="h-12 w-12 mx-auto mb-4 opacity-20" />
            <h3 className="font-medium text-lg mb-1">View Test Results</h3>
            <p>Select specific test results to view them here</p>
          </div>
        </TabsContent>
        <TabsContent value="vaccination">
          <div className="p-8 text-center text-muted-foreground">
            <Hospital className="h-12 w-12 mx-auto mb-4 opacity-20" />
            <h3 className="font-medium text-lg mb-1">Vaccination Records</h3>
            <p>Your vaccination history will appear here</p>
          </div>
        </TabsContent>
        <TabsContent value="consultation">
          <div className="p-8 text-center text-muted-foreground">
            <Hospital className="h-12 w-12 mx-auto mb-4 opacity-20" />
            <h3 className="font-medium text-lg mb-1">Consultation History</h3>
            <p>Your doctor consultation history will appear here</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Records;

