using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace ErrorCenter.Models
{
    [Table("user")]
    public class User
    {
        [Column("id")]
        [Key]
        public int Id { get; set; }

        [Column("token")]
        [StringLength(100)]
        [Required]
        public string Token { get; set; } 

        [Column("email")]
        [StringLength(255)]
        [Required]
        public string Email { get; set; }

        [Column("password")]
        [StringLength(255)]
        [Required]
        public string Password { get; set; }

        [Column("role")]
        [StringLength(15)]
        [Required]
        public string Role { get; set; }

        [Column("created_at")]
        [Required]
        public DateTime CreatedAt { get; set; }

    }
}
