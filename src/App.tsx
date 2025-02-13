import { SignInForm } from "./components/patterns/auth/sign-in-form";
import { DataTable } from "./components/patterns/data-display/data-table";
import { HeroSection } from "./components/patterns/marketing/hero-section";
import { Navbar } from "./components/patterns/navigation/navbar";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

// Example data for the table
const data = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
  },
];

const columns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />

        <div className="container mx-auto py-12 space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Authentication</h2>
            <div className="flex justify-center">
              <SignInForm />
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Data Display</h2>
            <DataTable columns={columns} data={data} />
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card content goes here.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Action</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Feature Card</CardTitle>
                  <CardDescription>Highlight key features</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Showcase important features or content.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pricing Card</CardTitle>
                  <CardDescription>Choose your plan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <span className="text-3xl font-bold">$29</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Select Plan
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
