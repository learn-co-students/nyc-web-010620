# OO Review

- Movies -< Roles >- Actors
- City -< Building >- Company
- Company -< Employees -< Tasks
- Destination -< Trains >- Person
- Driver -< Ride >- Passenger
- Thief -< Contracts >- Artifact
- Assassin -< Contract >- PoliticalFigure

### Driver
- [x] `#rating`
- [x] `#name`
- [x] `#car`
- [x] `#rides` (!)
- [x] `#passengers` (!)
- [x] `.all`
- [x] `#average_travel_time` - return the average time of this driver's rides
- [x] `#most_expensive_ride` - return the most expensive ride ever given by this driver
- [ ] `.longest_driver` - returns the one driver who has driven the longest

### Ride
- [x] `#duration`
- [x] `#price`
- [x] `#driver` (!)
- [x] `#passenger` (!)
- [x] `.all`
- [ ] `.most_expensive` - returns the most expensive ride ever given ever

### Passenger
- [x] `#name`
- [x] `#rating`
- [x] `#rides` (!)
- [x] `#drivers` (!)
- [x] `.all`
- [x] `#average_trip_price` - return the average expense of this passenger's rides
- [x] `.most_drivers` - return the passenger who has had the most unique drivers



