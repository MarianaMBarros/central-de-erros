using ErrorCenter.Models;

namespace ErrorCenter.Repositories
{
    public interface IUserRepository
    {
        User GetUser(string email);
        User GetUser(string email, string password);
        User Save(User user);
    }
}
