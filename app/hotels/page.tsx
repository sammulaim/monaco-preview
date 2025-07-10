"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Filter } from "lucide-react"
import Link from "next/link"

const hotels = [
  {
    id: 1,
    name: "Grand Ocean Resort",
    location: "Miami Beach, FL",
    rating: 4.8,
    reviews: 1247,
    price: 299,
    originalPrice: 349,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["Pool", "WiFi", "Parking", "Restaurant", "Spa", "Beach Access"],
    description: "Luxury beachfront resort with stunning ocean views and world-class amenities.",
  },
  {
    id: 2,
    name: "Mountain View Lodge",
    location: "Aspen, CO",
    rating: 4.6,
    reviews: 892,
    price: 189,
    originalPrice: 229,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["Spa", "WiFi", "Restaurant", "Gym", "Ski Access"],
    description: "Cozy mountain retreat perfect for skiing and relaxation.",
  },
  {
    id: 3,
    name: "City Center Hotel",
    location: "New York, NY",
    rating: 4.4,
    reviews: 2156,
    price: 249,
    originalPrice: 299,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["WiFi", "Parking", "Business Center", "Gym", "Restaurant"],
    description: "Modern hotel in the heart of Manhattan with easy access to attractions.",
  },
  {
    id: 4,
    name: "Sunset Beach Villa",
    location: "Malibu, CA",
    rating: 4.9,
    reviews: 567,
    price: 399,
    originalPrice: 449,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["Beach Access", "WiFi", "Pool", "Restaurant", "Spa"],
    description: "Exclusive beachfront villa with private beach and sunset views.",
  },
  {
    id: 5,
    name: "Historic Downtown Inn",
    location: "Charleston, SC",
    rating: 4.3,
    reviews: 834,
    price: 159,
    originalPrice: 189,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["WiFi", "Restaurant", "Historic Tours", "Parking"],
    description: "Charming historic inn in the heart of Charleston's historic district.",
  },
  {
    id: 6,
    name: "Desert Oasis Resort",
    location: "Scottsdale, AZ",
    rating: 4.7,
    reviews: 1023,
    price: 219,
    originalPrice: 259,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["Pool", "Spa", "Golf", "WiFi", "Restaurant", "Gym"],
    description: "Luxury desert resort with championship golf course and spa.",
  },
]

export default function HotelsPage() {
  const [priceRange, setPriceRange] = useState([100, 500])
  const [sortBy, setSortBy] = useState("recommended")

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
            <Link href="/hotels" className="text-foreground hover:text-primary">
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
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Filter className="h-5 w-5 mr-2" />
                  <h2 className="text-lg font-semibold">Filters</h2>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-3 block">Price Range</Label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={500}
                    min={50}
                    step={10}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-3 block">Star Rating</Label>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <label key={stars} className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <div className="flex">
                          {Array.from({ length: stars }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm">& up</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-3 block">Amenities</Label>
                  <div className="space-y-2">
                    {["WiFi", "Pool", "Parking", "Restaurant", "Spa", "Gym", "Beach Access"].map((amenity) => (
                      <label key={amenity} className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </CardContent>
            </Card>
          </div>

          {/* Hotel Listings */}
          <div className="lg:w-3/4">
            {/* Search Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold mb-2">Hotels in Your Area</h1>
                <p className="text-muted-foreground">{hotels.length} properties found</p>
              </div>
              <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                <Label htmlFor="sort" className="text-sm">
                  Sort by:
                </Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Hotel Cards */}
            <div className="space-y-6">
              {hotels.map((hotel) => (
                <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img
                        src={hotel.image || "/placeholder.svg"}
                        alt={hotel.name}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <CardContent className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{hotel.name}</h3>
                          <p className="text-muted-foreground flex items-center mb-2">
                            <MapPin className="h-4 w-4 mr-1" />
                            {hotel.location}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center mb-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                            <span className="font-medium">{hotel.rating}</span>
                            <span className="text-sm text-muted-foreground ml-1">({hotel.reviews} reviews)</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">{hotel.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {hotel.amenities.slice(0, 4).map((amenity, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                        {hotel.amenities.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{hotel.amenities.length - 4} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex justify-between items-end">
                        <div className="flex items-center space-x-2">
                          <Link href={`/hotel/${hotel.id}`}>
                            <Button variant="outline">View Details</Button>
                          </Link>
                          <Link href={`/hotel/${hotel.id}/book`}>
                            <Button>Book Now</Button>
                          </Link>
                        </div>
                        <div className="text-right">
                          {hotel.originalPrice > hotel.price && (
                            <p className="text-sm text-muted-foreground line-through">${hotel.originalPrice}</p>
                          )}
                          <p className="text-2xl font-bold text-primary">
                            ${hotel.price}
                            <span className="text-sm font-normal text-muted-foreground">/night</span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
