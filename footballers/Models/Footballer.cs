using System;

namespace footballers.Models
{
    public class Footballer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Sex { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int TeamId { get; set; }
        public Team Team { get; set; }
        public int CountryId { get; set; }
        public Country Country { get; set; }
    }
}