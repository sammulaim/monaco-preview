"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Calendar, CreditCard, User, MapPin, Star, CheckCircle } from "lucide-react"
import Link from "next/link"

// Mock hotel data
const hotel = {
  id: 1,
  name: "Grand Ocean Resort",
  location: "Miami Beach, FL",
  rating: 4.8,
  reviews: 1247,
  image: "/placeholder.svg?height=200&width=300",
}

const roomTypes = [
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
]

export default function BookingPage() {
  const [selectedRoom, setSelectedRoom] = useState(0)
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState("2")
  const [nights, setNights] = useState(3)

  const selectedRoomData = roomTypes[selectedRoom]
  const subtotal = selectedRoomData.price * nights
  const taxes = Math.round(subtotal * 0.12)
  const total = subtotal + taxes

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
          <Link href={`/hotel/${hotel.id}`} className="hover:text-primary">
            {hotel.name}
          </Link>
          <span>/</span>
          <span className="text-foreground">Book</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Booking Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="checkin">Check-in Date</Label>
                    <Input id="checkin" type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="checkout">Check-out Date</Label>
                    <Input id="checkout" type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Select value={guests} onValueChange={setGuests}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="nights">Number of Nights</Label>
                    <Input
                      id="nights"
                      type="number"
                      value={nights}
                      onChange={(e) => setNights(Number.parseInt(e.target.value) || 1)}
                      min="1"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Select Room Type</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {roomTypes.map((room, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedRoom === index ? "border-primary bg-primary/5" : "border-border"
                    }`}
                    onClick={() => setSelectedRoom(index)}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold">{room.type}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                          <span>{room.size}</span>
                          <span>{room.beds}</span>
                          <span>Up to {room.guests} guests</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-primary">
                          ${room.price}
                          <span className="text-sm font-normal text-muted-foreground">/night</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity, amenityIndex) => (
                        <Badge key={amenityIndex} variant="secondary" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Guest Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input id="cardName" placeholder="John Doe" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-4">
                  <img
                    src={hotel.image || "/placeholder.svg"}
                    alt={hotel.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold">{hotel.name}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3 mr-1" />
                      {hotel.location}
                    </div>
                    <div className="flex items-center mt-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm">
                        {hotel.rating} ({hotel.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Room Type</span>
                    <span className="text-sm font-medium">{selectedRoomData.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Guests</span>
                    <span className="text-sm">{guests} guests</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Nights</span>
                    <span className="text-sm">{nights} nights</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Room Rate</span>
                    <span className="text-sm">
                      ${selectedRoomData.price} × {nights}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Subtotal</span>
                    <span className="text-sm">${subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Taxes & Fees</span>
                    <span className="text-sm">${taxes}</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total</span>
                  <span className="text-xl font-bold text-primary">${total}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Free Cancellation</h4>
                    <p className="text-sm text-muted-foreground">
                      Cancel up to 24 hours before check-in for a full refund
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Best Price Guarantee</h4>
                    <p className="text-sm text-muted-foreground">We'll match any lower price you find elsewhere</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button size="lg" className="w-full">
              Complete Booking
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
