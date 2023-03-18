interface IListItem {
  icon: React.ReactNode;
  children: React.ReactNode;
}

const ListItem = ({ icon, children }: IListItem) => {
  return (
    <div className="flex items-center text-white hover:bg-secondary px-3 py-1">
      <div className="flex-shrink-0 w-4">{icon}</div>
      <div className="ml-4">{children}</div>
    </div>
  );
};

export default ListItem;
