using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ICT2106;

namespace ICT2106.Data;
public class ApplicationDbContext : IdentityDbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<Manufacturer> Manufacturers { get; set; }

    //public DbSet<CleanBrightCompany.Models.ShippingAgent> ShippingAgents { get; set; } = default!;

    //public DbSet<CleanBrightCompany.Models.Orders> Orders { get; set; } = default!;

   // public DbSet<CleanBrightCompany.Models.RefundExchange> RefundExchange { get; set; } = default!;
}