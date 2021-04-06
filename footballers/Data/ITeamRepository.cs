using System.Collections.Generic;
using footballers.Models;

namespace footballers.Data
{
    public interface ITeamRepository
    {
        public IEnumerable<Team> GetTeams();
    }
}