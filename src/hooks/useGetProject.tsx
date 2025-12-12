import { useEffect, useState } from "react";
import axios from "axios";

export default function useGetProject() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await axios.get("/api/user/projects"); 
        setData(response.data.data || []);
      } catch (err: any) {
        setError(err.response?.data?.error || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return { loading, data, error };
}
