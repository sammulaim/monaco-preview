import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CalendarDays, MapPin, Search, Star, Users } from "lucide-react"
import Link from "next/link"

const featuredHotels = [
  {
    id: 1,
    name: "Grand Ocean Resort",
    location: "Miami Beach, FL",
    rating: 4.8,
    reviews: 1247,
    price: 299,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["Pool", "WiFi", "Parking", "Restaurant"],
  },
  {
    id: 2,
    name: "Mountain View Lodge",
    location: "Aspen, CO",
    rating: 4.6,
    reviews: 892,
    price: 189,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["Spa", "WiFi", "Restaurant", "Gym"],
  },
  {
    id: 3,
    name: "City Center Hotel",
    location: "New York, NY",
    rating: 4.4,
    reviews: 2156,
    price: 249,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["WiFi", "Parking", "Business Center", "Gym"],
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">H</span>
            </div>
            <span className="text-xl font-bold">HotelBook</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-foreground hover:text-primary">
              Home
            </Link>
            <Link href="/hotels" className="text-muted-foreground hover:text-primary">
              Hotels
            </Link>
            <Link href="/bookings" className="text-muted-foreground hover:text-primary">
              My Bookings
            </Link>
            <Button variant="outline">Sign In</Button>
            <Button>Sign Up</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 to-orange-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Find Your Perfect Stay</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover amazing hotels around the world with the best prices and exclusive deals
          </p>

          {/* Search Form */}
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="destination" className="text-sm font-medium text-foreground">
                    Destination
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="destination" placeholder="Where are you going?" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="checkin" className="text-sm font-medium text-foreground">
                    Check-in
                  </Label>
                  <div className="relative">
                    <CalendarDays className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="checkin" type="date" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="checkout" className="text-sm font-medium text-foreground">
                    Check-out
                  </Label>
                  <div className="relative">
                    <CalendarDays className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="checkout" type="date" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-sm font-medium text-foreground">
                    Guests
                  </Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="guests" placeholder="2 guests" className="pl-10" />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/hotels">
                  <Button size="lg" className="w-full md:w-auto">
                    <Search className="mr-2 h-4 w-4" />
                    Search Hotels
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Hotels</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of premium hotels offering exceptional service and unforgettable
              experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredHotels.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={hotel.image || "/placeholder.svg"} alt={hotel.name} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-md text-sm font-semibold">
                    ${hotel.price}/night
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{hotel.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{hotel.rating}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {hotel.location}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.map((amenity, index) => (
                      <span key={index} className="px-2 py-1 bg-muted rounded-md text-xs">
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{hotel.reviews} reviews</span>
                    <Link href={`/hotel/${hotel.id}`}>
                      <Button>View Details</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose HotelBook?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We make hotel booking simple, secure, and rewarding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Search</h3>
              <p className="text-muted-foreground">
                Find the perfect hotel with our advanced search and filtering options
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-muted-foreground">We guarantee the best prices with our price match promise</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Our customer support team is available around the clock to help you
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">H</span>
                </div>
                <span className="text-xl font-bold">HotelBook</span>
              </div>
              <p className="text-muted-foreground">
                Your trusted partner for finding the perfect accommodation worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 HotelBook. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
