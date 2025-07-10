import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, Star, Wifi, Car, Coffee, Waves, Dumbbell, Utensils, Phone, Mail } from "lucide-react"
import Link from "next/link"

// Mock hotel data - in a real app, this would come from an API
const hotel = {
  id: 1,
  name: "Grand Ocean Resort",
  location: "Miami Beach, FL",
  rating: 4.8,
  reviews: 1247,
  price: 299,
  originalPrice: 349,
  images: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
  amenities: [
    { name: "Free WiFi", icon: Wifi },
    { name: "Swimming Pool", icon: Waves },
    { name: "Fitness Center", icon: Dumbbell },
    { name: "Restaurant", icon: Utensils },
    { name: "Free Parking", icon: Car },
    { name: "Coffee Shop", icon: Coffee },
  ],
  description:
    "Experience luxury at its finest at the Grand Ocean Resort. Located directly on Miami Beach, our resort offers stunning ocean views, world-class amenities, and exceptional service. Whether you're here for business or pleasure, our spacious rooms and suites provide the perfect retreat.",
  features: [
    "Beachfront location with private beach access",
    "Multiple dining options including fine dining restaurant",
    "Full-service spa and wellness center",
    "State-of-the-art fitness center",
    "Business center and meeting facilities",
    "Concierge services available 24/7",
  ],
  rooms: [
    {
      type: "Ocean View Room",
      size: "350 sq ft",
      beds: "1 King Bed",
      guests: 2,
      price: 299,
      amenities: ["Ocean View", "WiFi", "Mini Bar", "Safe"],
    },
    {
      type: "Ocean View Suite",
      size: "550 sq ft",
      beds: "1 King Bed + Sofa Bed",
      guests: 4,
      price: 399,
      amenities: ["Ocean View", "WiFi", "Mini Bar", "Safe", "Separate Living Area"],
    },
    {
      type: "Presidential Suite",
      size: "1200 sq ft",
      beds: "1 King Bed + 2 Queen Beds",
      guests: 6,
      price: 799,
      amenities: ["Panoramic Ocean View", "WiFi", "Full Kitchen", "Safe", "Private Balcony", "Butler Service"],
    },
  ],
  contact: {
    phone: "+1 (305) 555-0123",
    email: "info@grandoceanresort.com",
    address: "123 Ocean Drive, Miami Beach, FL 33139",
  },
  checkIn: "3:00 PM",
  checkOut: "11:00 AM",
}

export default function HotelDetailPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">H</span>
            </div>
            <span className="text-xl font-bold">HotelBook</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-muted-foreground hover:text-primary">
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

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link href="/hotels" className="hover:text-primary">
            Hotels
          </Link>
          <span>/</span>
          <span className="text-foreground">{hotel.name}</span>
        </div>

        {/* Hotel Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">{hotel.name}</h1>
            <div className="flex items-center space-x-4 mb-2">
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="font-medium">{hotel.rating}</span>
                <span className="text-muted-foreground ml-1">({hotel.reviews} reviews)</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                {hotel.location}
              </div>
            </div>
          </div>
          <div className="text-right mt-4 lg:mt-0">
            {hotel.originalPrice > hotel.price && (
              <p className="text-lg text-muted-foreground line-through">${hotel.originalPrice}</p>
            )}
            <p className="text-3xl font-bold text-primary">
              ${hotel.price}
              <span className="text-lg font-normal text-muted-foreground">/night</span>
            </p>
            <Link href={`/hotel/${hotel.id}/book`}>
              <Button size="lg" className="mt-2">
                Book Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="lg:col-span-2 lg:row-span-2">
            <img
              src={hotel.images[0] || "/placeholder.svg"}
              alt={hotel.name}
              className="w-full h-64 lg:h-full object-cover rounded-lg"
            />
          </div>
          {hotel.images.slice(1).map((image, index) => (
            <div key={index}>
              <img
                src={image || "/placeholder.svg"}
                alt={`${hotel.name} ${index + 2}`}
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">About This Hotel</h2>
                <p className="text-muted-foreground mb-6">{hotel.description}</p>

                <h3 className="text-lg font-semibold mb-3">Hotel Features</h3>
                <ul className="space-y-2">
                  {hotel.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {hotel.amenities.map((amenity, index) => {
                    const Icon = amenity.icon
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <Icon className="h-5 w-5 text-primary" />
                        <span className="text-sm">{amenity.name}</span>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Room Types */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Room Types</h2>
                <div className="space-y-4">
                  {hotel.rooms.map((room, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-lg font-semibold">{room.type}</h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                            <span>{room.size}</span>
                            <span>{room.beds}</span>
                            <span>Up to {room.guests} guests</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-primary">
                            ${room.price}
                            <span className="text-sm font-normal text-muted-foreground">/night</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {room.amenities.map((amenity, amenityIndex) => (
                          <Badge key={amenityIndex} variant="secondary" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                      <Link href={`/hotel/${hotel.id}/book?room=${index}`}>
                        <Button variant="outline" size="sm">
                          Select Room
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Book Your Stay</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-sm font-medium">Check-in</label>
                      <input type="date" className="w-full mt-1 px-3 py-2 border rounded-md" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Check-out</label>
                      <input type="date" className="w-full mt-1 px-3 py-2 border rounded-md" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Guests</label>
                    <select className="w-full mt-1 px-3 py-2 border rounded-md">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                    </select>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total per night</span>
                    <span className="text-xl font-bold text-primary">${hotel.price}</span>
                  </div>
                  <Link href={`/hotel/${hotel.id}/book`}>
                    <Button className="w-full">Book Now</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{hotel.contact.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{hotel.contact.email}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span className="text-sm">{hotel.contact.address}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Check-in</span>
                    <span className="text-sm text-muted-foreground">{hotel.checkIn}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Check-out</span>
                    <span className="text-sm text-muted-foreground">{hotel.checkOut}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
