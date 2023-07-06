using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HospitalManagementSystem.Migrations
{
    /// <inheritdoc />
    public partial class modelsadded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Role",
                table: "DoctorDummys",
                newName: "Roles");

            migrationBuilder.RenameColumn(
                name: "Names",
                table: "DoctorDummys",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "EmailId",
                table: "DoctorDummys",
                newName: "Email");

            migrationBuilder.RenameColumn(
                name: "User",
                table: "DoctorDummys",
                newName: "Username");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Roles",
                table: "DoctorDummys",
                newName: "Role");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "DoctorDummys",
                newName: "Names");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "DoctorDummys",
                newName: "EmailId");

            migrationBuilder.RenameColumn(
                name: "Username",
                table: "DoctorDummys",
                newName: "User");
        }
    }
}
