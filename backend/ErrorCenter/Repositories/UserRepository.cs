using System.Linq;
using ErrorCenter.Data;
using ErrorCenter.Models;
using Microsoft.EntityFrameworkCore;

namespace ErrorCenter.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly ErrorCenterContext _context;

        public UserRepository(ErrorCenterContext context)
        {
            _context = context;
        }

        public User GetUser(string email, string password)
        {
            return _context.Users.FirstOrDefault(c => c.Email == email && c.Password == password);
        }

        public User GetUser(string email)
        {
            return _context.Users.FirstOrDefault(c => c.Email == email);
        }

        public User Save(User user)
        {
            var state = user.Id == 0 ? EntityState.Added : EntityState.Modified;
            _context.Entry(user).State = state;
            _context.SaveChanges();
            return user;
        }
    }
}
