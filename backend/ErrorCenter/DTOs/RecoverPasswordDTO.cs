using System.ComponentModel.DataAnnotations;

namespace ErrorCenter.DTOs
{
    public class RecoverPasswordDTO
    {
        [Required]
        public string Email { get; set; }
    }
}
