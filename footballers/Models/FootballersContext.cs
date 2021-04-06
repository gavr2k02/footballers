using Microsoft.EntityFrameworkCore;

namespace footballers.Models
{
    public class FootballersContext : DbContext
    {
        public FootballersContext(DbContextOptions<FootballersContext> options)
            : base(options)
        {
        }

        public DbSet<Footballer> Footballers { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<Country> Countries { get; set; }
    }
}