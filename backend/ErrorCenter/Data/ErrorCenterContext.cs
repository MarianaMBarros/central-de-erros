using ErrorCenter.Models;
using Microsoft.EntityFrameworkCore;

namespace ErrorCenter.Data
{
    public class ErrorCenterContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Log> Logs { get; set; }


        public ErrorCenterContext(DbContextOptions<ErrorCenterContext> options)
            : base(options)
        {
        }
    }
}
