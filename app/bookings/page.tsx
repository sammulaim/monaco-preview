import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Star } from "lucide-react"
import Link from "next/link"

const bookings = [
  {
    id: "BK001",
    hotel: {
      name: "Grand Ocean Resort",
      location: "Miami Beach, FL",
      rating: 4.8,
      image: "/placeholder.svg?height=150&width=200",
    },
    room: "Ocean View Suite",
    checkIn: "2024-03-15",
    checkOut: "2024-03-18",
    guests: 2,
    nights: 3,
    total: 1197,
    status: "confirmed",
    bookingDate: "2024-02-10",
  },
  {
    id: "BK002",
    hotel: {
      name: "Mountain View Lodge",
      location: "Aspen, CO",
      rating: 4.6,
      image: "/placeholder.svg?height=150&width=200",
    },
    room: "Deluxe Mountain Room",
    checkIn: "2024-04-20",
    checkOut: "2024-04-23",
    guests: 4,
    nights: 3,
    total: 567,
    status: "upcoming",
    bookingDate: "2024-02-15",
  },
  {
    id: "BK003",
    hotel: {
      name: "City Center Hotel",
      location: "New York, NY",
      rating: 4.4,
      image: "/placeholder.svg?height=150&width=200",
    },
    room: "Business Suite",
    checkIn: "2024-01-10",
    checkOut: "2024-01-12",
    guests: 1,
    nights: 2,
    total: 498,
    status: "completed",
    bookingDate: "2023-12-20",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "confirmed":
      return "bg-green-100 text-green-800"
    case "upcoming":
      return "bg-blue-100 text-blue-800"
    case "completed":
      return "bg-gray-100 text-gray-800"
    case "cancelled":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function BookingsPage() {
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
            <Link href="/bookings" className="text-foreground hover:text-primary">
              My Bookings
            </Link>
            <Button variant="outline">Sign In</Button>
            <Button>Sign Up</Button>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Bookings</h1>
          <p className="text-muted-foreground">Manage your hotel reservations and view booking history</p>
        </div>

        <div className="space-y-6">
          {bookings.map((booking) => (
            <Card key={booking.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4">
                    <img
                      src={booking.hotel.image || "/placeholder.svg"}
                      alt={booking.hotel.name}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/4 p-6">
                    <div className="flex flex-col lg:flex-row justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-xl font-semibold">{booking.hotel.name}</h3>
                          <Badge className={getStatusColor(booking.status)}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </Badge>
                        </div>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          {booking.hotel.location}
                        </div>
                        <div className="flex items-center mb-4">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="text-sm">{booking.hotel.rating}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Booking ID</p>
                        <p className="font-mono text-sm">{booking.id}</p>
                        <p className="text-2xl font-bold text-primary mt-2">${booking.total}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Room Type</p>
                        <p className="font-medium">{booking.room}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Check-in / Check-out</p>
                        <p className="font-medium">
                          {new Date(booking.checkIn).toLocaleDateString()} -{" "}
                          {new Date(booking.checkOut).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Guests & Nights</p>
                        <p className="font-medium">
                          {booking.guests} guests • {booking.nights} nights
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                      <p className="text-sm text-muted-foreground">
                        Booked on {new Date(booking.bookingDate).toLocaleDateString()}
                      </p>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {booking.status === "upcoming" && (
                          <Button variant="outline" size="sm">
                            Modify Booking
                          </Button>
                        )}
                        {booking.status === "confirmed" && (
                          <Button variant="outline" size="sm">
                            Cancel Booking
                          </Button>
                        )}
                        <Button size="sm">Contact Hotel</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {bookings.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <CalendarDays className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No bookings yet</h3>
              <p className="text-muted-foreground mb-4">Start planning your next trip by browsing our amazing hotels</p>
              <Link href="/hotels">
                <Button>Browse Hotels</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
