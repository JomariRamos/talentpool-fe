import React from "react";
import UserTable from "../components/tables/UserTable";
import UserModal from "../components/modals/UserModal";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USERS } from "../queries";
import { CREATE_USER } from "../mutations";
import { User } from "../types";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

const UsersPage: React.FC = () => {
  const [openUserModal, setOpenUserModal] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [roleFilter, setRoleFilter] = React.useState<string | "">("");

  const { data: usersData } = useQuery<{ users: User[] }>(GET_USERS, {
    variables: {
      where: {
        name: { contains: search },
        role: roleFilter ? { eq: roleFilter } : undefined,
      },
    },
  });

  const [createUser] = useMutation(CREATE_USER, {
    refetchQueries: [{ query: GET_USERS }],
  });

  const handleUserSubmit = async (data: { name: string; role: string }) => {
    try {
      await createUser({ variables: data });
      setOpenUserModal(false);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <div style={{ maxWidth: "1200px", width: "100%" }}>
        <div style={{ marginBottom: "20px" }}>
          <TextField
            label="Search by Name"
            variant="outlined"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <FormControl fullWidth variant="outlined">
            <InputLabel>Role</InputLabel>
            <Select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              label="Role"
              style={{ marginBottom: "10px" }}
            >
              <MenuItem value="">All Roles</MenuItem>
              <MenuItem value="DEVELOPER">Developer</MenuItem>
              <MenuItem value="MANAGER">Manager</MenuItem>
              <MenuItem value="ADMIN">Admin</MenuItem>
            </Select>
          </FormControl>
        </div>
        <UserTable
          users={usersData?.users || []}
          onOpenModal={() => setOpenUserModal(true)}
        />
        <UserModal
          open={openUserModal}
          onClose={() => setOpenUserModal(false)}
          onSubmit={handleUserSubmit}
        />
      </div>
    </div>
  );
};

export default UsersPage;
