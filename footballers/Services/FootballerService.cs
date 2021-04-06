using System.Collections.Generic;
using footballers.Models;
using footballers.Data;

namespace footballers.Services
{
    public class FootbalerService : IFootballerService
    {
        private readonly IFootballerRepository repository;

        public FootbalerService(IFootballerRepository repository)
        {
            this.repository = repository;
        }

        public bool AddFootballer(Footballer footballer)
            => repository.AddFootballer(footballer);

        public IEnumerable<Footballer> GetFootballers()
            => repository.GetFootballers();

        public bool UpdateFootballer(Footballer footballer)
            => repository.UpdateFootballer(footballer);
    }
}