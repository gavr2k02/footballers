using System.Collections.Generic;
using footballers.Models;
using footballers.Data;

namespace footballers.Services
{
    public class TeamService : ITeamService
    {
        private readonly ITeamRepository repository;

        public TeamService(ITeamRepository repository)
        {
            this.repository = repository;
        }

        public IEnumerable<Team> GetTeams()
            => repository.GetTeams();
    }
}