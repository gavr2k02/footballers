using System.Collections.Generic;

namespace footballers.Models
{
    public class Team
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Footballer> Footballers { get; set; }
    }
}