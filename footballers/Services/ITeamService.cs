using System.Collections.Generic;
using footballers.Models;

namespace footballers.Services
{
    public interface ITeamService
    {
        public IEnumerable<Team> GetTeams();
    }
}