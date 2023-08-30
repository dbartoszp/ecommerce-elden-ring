import { Modal } from "@/modules/ui/Modal/Modal";
import { SearchCategories } from "./SearchCategories/SearchCategories";
import { SearchFilters } from "./SearchFilters/SearchFilters";
import { useDisclosure } from "@/modules/ui/Modal/useDisclosure/useDisclosure";

export const SearchFiltering = () => {
  const { isOpen, close, changeOpenState } = useDisclosure();

  return (
    <div className="mb-6 flex items-center justify-center">
      <Modal
        title="Filter weapons by categories and types"
        openText="Filter weapons"
        onClose={close}
        onOpenChange={changeOpenState}
        open={isOpen}
      >
        <div className="flex flex-col space-y-6">
          <SearchCategories />
          <div className="h-96">
            <SearchFilters />
          </div>
        </div>
      </Modal>
    </div>
  );
};
